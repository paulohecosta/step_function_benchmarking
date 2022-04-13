# step_function_benchmarking

This is a example project to test the performance between a lambda service and a stepfunction with microservices.

## Build on AWS
`npm i` inside layer and lambda functions folder.

`aws cloudformation package --template-file template.yaml --s3-bucket sfun-checker --s3-prefix builds --output-template-file template-output.yaml --profile personal`
## Deploy on AWS

`aws cloudformation deploy --template-file template-output.yaml --s3-bucket sfun-checker  --s3-prefix builds --stack-name sfun-checker --capabilities CAPABILITY_NAMED_IAM --profile personal --parameter-overrides $(jq -r '.Parameters | to_entries | map("\(.key)=\(.value|tostring)") | .[]' config.json)`