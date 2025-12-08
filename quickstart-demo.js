import { fetch as httpFetch } from 'newton:provider/http@0.1.0';

function parseResponseBody(response) {
  return JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
}

function getKycResponse(inquiry_id) {
  const url = `https://withpersona.com/api/v1/inquiries/${inquiry_id}`;

  const authHeader = ["Authorization", "Bearer persona_sandbox_9cf7f104-1699-497e-9424-bf83f577a431"];
  const contentTypeHeader = ["Content-Type", "application/json"];

  try {
    const response = httpFetch({ url, method: "GET", headers: [contentTypeHeader, authHeader] });
    const body = parseResponseBody(response);

    return { 
      kyc_status: body.data.attributes.status,
      name_first: body.data.attributes['name-first'],
      name_last: body.data.attributes['name-last']
    };
  } catch (error) {
    return { kyc_status: "denied", name_first: "", name_last: "" };
  }
}

function getOfacResponse(address) {
  try {
    const url = `https://o66wu5mr47.execute-api.us-east-2.amazonaws.com/default/chainalysis/address/${address}`;

    const response = httpFetch({ url, method: "GET", headers: [] });
    const body = parseResponseBody(response);

    return { identifications: body.identifications, sanctioned: body.identifications.length > 0 };
  } catch (error) {
    return { identifications: [], sanctioned: false };
  }
}

export function run(wasm_args) {
  const wasmArgs = JSON.parse(wasm_args);

  const { inquiry_id, address } = wasmArgs;

  const kycResponse = getKycResponse(inquiry_id);
  const ofacResponse = getOfacResponse(address);
  
  return JSON.stringify({
    ...kycResponse,
    ...ofacResponse,
    address,
  });
}
