#!/bin/bash

cp ../word-weaver/src/config/schema.ts .
mkdir -p schemas

for type in Options Verbs Pronouns Conjugations; do
    npx typescript-json-schema --ignoreErrors package.json $type > schemas/$type.jsonschema.json
done
