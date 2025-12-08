# quickstart-policies
## build the wasm
componentize-js --wit newton-provider.wit -o policy.wasm quickstart-demo.js -d stdio random clocks http fetch-event

## test the wasm
newton-cli policy-data simulate --wasm-file policy.wasm --input-json '{"inquiry_id":"inq_xRZrQFKg7rqZ5UZGLhnvb2ympshE", "address":"0x1999ef52700c34de7ec2b68a28aafb37db0c5ade"}'

## test the whole policy
newton-cli policy simulate \
  --wasm-file policy-files/policy.wasm \
  --rego-file policy-files/policy.rego \
  --intent-json policy-files/intent.json \
  --entrypoint "max_gas_price.allow" \
  --wasm-args policy-files/wasm_args.json \
  --policy-params-data policy-files/policy_params_data.json
