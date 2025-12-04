# Newton CLI

The Newton CLI (`newton-cli`) is a command-line interface for interacting with the Newton Policy Protocol AVS. It provides tools for deploying policies, managing policy data, configuring policy clients, and submitting evaluation requests.

## Overview

The Newton CLI enables developers and operators to:

- **Generate CIDs** for policy files and upload them to IPFS via Pinata
- **Deploy and simulate** policy data contracts
- **Deploy and simulate** policy contracts
- **Configure policy clients** with parameters and expiration settings
- **Submit evaluation requests** to the prover AVS

## Installation

Build the CLI from source:

```bash
cargo build --bin newton-cli --release
```

The binary will be available at `target/release/newton-cli`.

## Configuration

Most commands support configuration via environment variables or command-line arguments. You can create a `.env` file in your working directory with common settings:

```bash
CHAIN_ID=11155111
PRIVATE_KEY="your_private_key"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/apiKey"
PINATA_JWT="your_pinata_jwt"
PINATA_GATEWAY="your_pinata_gateway"
```

Global flags that can be used with any command:

- `--chain-id`: The chain ID to use (can also be set via `CHAIN_ID` env var)
- `--log-format`: Log format (full, compact, pretty, json, or minimal)

## Command Reference

The commands are organized by workflow, from policy creation to task submission.

---

## Policy Files

Commands for managing policy files and generating content identifiers (CIDs) for IPFS storage.

### generate-cids

Generates CIDs for policy files and uploads them to IPFS via Pinata.

```bash
newton-cli --chain-id 11155111 policy-files generate-cids \
    --directory policy-files \
    --output policy-files/policy_cids.json \
    --pinata-jwt "your pinata jwt" \
    --pinata-gateway "your pinata gatway" \
    --entrypoint "max_gas_price.allow"
```

**Using environment variables:**

Create a `.env` file:

```bash
CHAIN_ID=11155111
PINATA_JWT="your pinata jwt"
PINATA_GATEWAY="your pinata gatway"
```

Then run:

```bash
newton-cli policy-files generate-cids \
    --directory policy-files \
    --output policy-files/policy_cids.json \
    --entrypoint "chainalysis_sanctions_agent.allow"
```

---

## Policy Data

Commands for deploying and testing policy data contracts that store policy information on-chain.

### deploy

Deploys a policy data contract with the specified policy CIDs.

```bash
newton-cli --chain-id 11155111 policy-data deploy \
  --private-key "development_pk" \
  --rpc-url "https://eth-sepolia.g.alchemy.com/v2/apiKey" \
  --policy-cids policy-files/policy_cids.json
```

**Using environment variables:**

Create a `.env` file:

```bash
CHAIN_ID=11155111
PRIVATE_KEY="development_pk"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/apiKey"
```

Then run:

```bash
newton-cli policy-data deploy --policy-cids policy-files/policy_cids.json
```

### simulate

Simulates policy data execution locally without deploying to the blockchain.

```bash
newton-cli policy-data simulate --wasm-file policy-files/policy.wasm --input-json "{}"
```

---

## Policy

Commands for deploying and testing policy contracts that define authorization rules.

### deploy

Deploys a policy contract with the specified policy CIDs and policy data address.

```bash
newton-cli --chain-id 11155111 policy deploy \
  --private-key "development_pk" \
  --rpc-url "https://eth-sepolia.g.alchemy.com/v2/apiKey" \
  --policy-cids policy-files/policy_cids.json \
  --policy-data-address "0xdB9578b6c719122ECd30667D84D1fb483c789BC8"
```

**Using environment variables:**

Create a `.env` file:

```bash
CHAIN_ID=11155111
PRIVATE_KEY="development_pk"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/apiKey"
```

Then run:

```bash
newton-cli policy deploy \
  --policy-cids policy-files/policy_cids.json \
  --policy-data-address "0x9C516C2f6C123fd81D96B54f30Bf8a1CE0f5E92A"
```

### simulate

Simulates policy evaluation locally without deploying to the blockchain. Useful for testing policies before deployment.

```bash
newton-cli --chain-id 11155111 policy simulate \
  --wasm-file policy-files/policy.wasm \
  --rego-file policy-files/policy.rego \
  --intent-json policy-files/intent.json \
  --entrypoint "max_gas_price.allow" \
  --wasm-args policy-files/wasm_args.json \
  --policy-params-data policy-files/policy_params_data.json
```

**Notes:**

- The "data." prefix is automatically added to the entrypoint if not present. You can specify either "max_gas_price.allow" or "data.max_gas_price.allow".
- The `--wasm-args` argument is optional. If not provided, an empty JSON object `{}` will be used as input to the WASM execution.
- The `--policy-params-data` argument is optional. If not provided, an empty JSON object `{}` will be used for the params field in the policy evaluation.

---

## Policy Client

Commands for configuring policy clients with runtime parameters.

### set-policy-params

Sets policy parameters for a policy client contract, including expiration settings.

```bash
newton-cli --chain-id 11155111 policy-client set-policy-params \
  --policy-client "0x..." \
  --policy-params policy-files/policy_params_data.json \
  --expire-after 1000 \
  --private-key "development_pk" \
  --rpc-url "https://eth-sepolia.g.alchemy.com/v2/apiKey"
```

**Using environment variables:**

Create a `.env` file:

```bash
CHAIN_ID=11155111
PRIVATE_KEY="development_pk"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/apiKey"
```

Then run:

```bash
newton-cli policy-client set-policy-params \
  --policy-client "0x575bA0eC954F50F69D5c3f7fbfB289B665e408c2" \
  --policy-params policy-files/policy_params_data.json \
  --expire-after 31536000
```

---

## Task

Commands for submitting and managing policy evaluation requests.

### submit-evaluation-request

Submits a task for policy evaluation to the prover AVS. The command normalizes the intent, signs the task, and submits it.

```bash
newton-cli --chain-id 11155111 task submit-evaluation-request \
  --task-json path/to/task.json \
  --private-key "development_pk"
```

**Using environment variables:**

Create a `.env` file:

```bash
CHAIN_ID=11155111
PRIVATE_KEY="development_pk"
DEPLOYMENT_ENV=stagef # .env only, not exposed as a cli parameter
```

Then run:

```bash
newton-cli task submit-evaluation-request --task-json task.json
```

**Notes:**

- The `DEPLOYMENT_ENV` environment variable defaults to "prod" if not set. Valid values are "stagef" or "prod".
- The command normalizes the intent (converts value/chainId to hex), signs the task, and submits it to the prover AVS.
- The task JSON file should contain fields: `policyClient`, `intent`, `quorumNumber` (optional), `quorumThresholdPercentage` (optional), `wasmArgs` (optional), and `timeout`.
