import { fetch as httpFetch } from 'newton:provider/http@0.1.0';

export function run(wasm_args) {
  const wasmArgs = JSON.parse(wasm_args);

  const inquiry_id = wasmArgs.inquiry_id;
  const address = wasmArgs.address;
  try {
    const kycResponse = httpFetch({
      url: `https://withpersona.com/api/v1/inquiries/${inquiry_id}`,
      method: "GET",
      headers: [
          ["Content-Type", "application/json"],
          ["Authorization", "Bearer persona_sandbox_9cf7f104-1699-497e-9424-bf83f577a431"]
      ],
      body: null
    });
    
    const kycBody = JSON.parse(new TextDecoder().decode(new Uint8Array(kycResponse.body)));  
    const ofacUrl = `https://o66wu5mr47.execute-api.us-east-2.amazonaws.com/default/chainalysis/address/${address}`;
    const ofacResponse = httpFetch({ url: ofacUrl, method: "GET", headers: [], body: null });
    const ofacBody = JSON.parse(new TextDecoder().decode(new Uint8Array(ofacResponse.body)));
    
    return JSON.stringify({
      kyc_status: kycBody.data.attributes.status,
      ofac_status: ofacResponse.status,
      ofac_sanctioned: ofacBody.identifications.length > 0,
      ofac_identifications: ofacBody.identifications,
      kyc_name_first: kycBody.data.attributes['name-first'],
      kyc_name_last: kycBody.data.attributes['name-last'],
    });
  } catch (error) {
    return JSON.stringify({
      kyc_status: "denied",
      ofac_status: "denied",
      ofac_sanctioned: false,
      ofac_identifications: [],
      kyc_name_first: "",
      kyc_name_last: ""
    });
  }
}
