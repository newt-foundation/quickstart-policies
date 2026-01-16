import { fetch as httpFetch } from 'newton:provider/http@0.1.0';

async function getStampsScore(address) {
    const request = {
      url: `https://api.passport.xyz/v2/stamps/11910/score/${address}`,
      method: "GET",
      headers: [
        ["Content-Type", "application/json"],
        ["X-API-KEY", "cfRCNvKP.yi1vP4AEepDu1cJwCAKOgkZc7hjoP4bY"]
      ],
    };
    const response = await httpFetch(request);
    const body = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
    return body;
}

async function getModelsScore(address) {
    const request = {
      url: `https://api.passport.xyz/v2/models/score/${address}`,
      method: "GET",
      headers: [
        ["Content-Type", "application/json"],
        ["X-API-KEY", "cfRCNvKP.yi1vP4AEepDu1cJwCAKOgkZc7hjoP4bY"]
      ],
    };
    const response = await httpFetch(request);
    const body = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
    return body;
}

async function getProofOfCleanHands(address) {
    const request = {
      url: `https://mainnet-rpc.sign.global/api/scan/addresses/${address}/attestations`,
      method: "GET",
      headers: [["Content-Type", "application/json"]],
    };
    const response = await httpFetch(request);
    const body = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
    return body.data;
}

export async function run(wasm_args) {
    const wasmArgs = JSON.parse(wasm_args);
    const { address } = wasmArgs;
    try {
        const stampsScore = await getStampsScore(address);
        const modelsScore = await getModelsScore(address);
        const proofOfCleanHands = await getProofOfCleanHands(address);
        return JSON.stringify({ 
            stamps_score: stampsScore,
            models_score: modelsScore,
            proof_of_clean_hands: proofOfCleanHands
        });
    } catch (err) {
        return JSON.stringify({ error: err.message || String(err) });
    }
}
