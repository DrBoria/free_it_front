#!/usr/bin/env bash

aws_profile="${1}"
s3_front_bucket_name=free-it-front

npm run-script build

aws s3 sync \
  --profile "${aws_profile}" \
   build \
   "s3://${s3_front_bucket_name}"

