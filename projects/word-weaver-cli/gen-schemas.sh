#!/bin/bash

cp ../word-weaver/src/config/schema.ts .
mkdir -p schemas

for type in Options Verbs Pronouns Conjugations; do
    echo Generating the schema for $type.
    npx typescript-json-schema package.json $type > schemas/$type.jsonschema.json
done
