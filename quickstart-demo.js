import { fetch as httpFetch } from 'newton:provider/http@0.1.0';

function getKycResponse(inquiry_id) {
  try {
    const response = httpFetch({
    url: `https://withpersona.com/api/v1/inquiries/${inquiry_id}`,
    method: "GET",
    headers: [
        ["Content-Type", "application/json"],
        ["Authorization", "Bearer persona_sandbox_9cf7f104-1699-497e-9424-bf83f577a431"]
    ],
    body: null
    });
    const body = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
    return { 
      status: body.data.attributes.status,
      name_first: body.data.attributes['name-first'],
      name_last: body.data.attributes['name-last']
    };
  } catch (error) {
    return { status: "denied", name_first: "", name_last: "" };
  }
}

function getOfacResponse(address) {
  try {
    const ofacUrl = `https://o66wu5mr47.execute-api.us-east-2.amazonaws.com/default/chainalysis/address/${address}`;
    const response = httpFetch({ url: ofacUrl, method: "GET", headers: [], body: null });
    const body = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body)));
    return { identifications: body.identifications, sanctioned: body.identifications.length > 0 };
  } catch (error) {
    return { identifications: [], sanctioned: false };
  }
}

export function run(wasm_args) {
  const wasmArgs = JSON.parse(wasm_args);
  const inquiry_id = wasmArgs.inquiry_id;
  const address = wasmArgs.address;

  const kycResponse = getKycResponse(inquiry_id);
  const ofacResponse = getOfacResponse(address);
  
  return JSON.stringify({
    address,
    kyc_status: kycResponse.status,
    ofac_sanctioned: ofacResponse.sanctioned,
    ofac_identifications: ofacResponse.identifications,
    kyc_name_first: kycResponse.name_first,
    kyc_name_last: kycResponse.name_last,
  });
}
