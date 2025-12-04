import { fetch as httpFetch } from 'newton:provider/http@0.1.0';

export function run(inquiry_id) {
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
    return JSON.stringify({
      status: body.data.attributes.status,
      name_first: body.data.attributes['name-first'],
      name_last: body.data.attributes['name-last'],
    });
  } catch (error) {
    return JSON.stringify({
      status: "denied",
      name_first: "",
      name_last: ""
    });
  }
}
