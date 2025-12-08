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
  --entrypoint "quickstart_ofac.allow" \
  --wasm-args policy-files/wasm_args.json \
  --policy-params-data policy-files/policy_params_data.json

## generate CIDs
newton-cli policy-files generate-cids --directory policy-files --output policy-files/policy_cids.json --entrypoint "quickstart_ofac.allow"

## deploy policy data
newton-cli policy-data deploy --policy-cids policy-files/policy_cids.json

## deploy policy
newton-cli policy deploy \
  --policy-cids policy-files/policy_cids.json \
  --policy-data-address "0x237043a818870849793cfBA3828AA152B35545e3"