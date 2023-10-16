#!/bin/bash

# Usage:
#    ./gen-schemas.sh <lang_code>
#
# Generate JSON schema files for data validation from ../word-weaver/src/config/schema.ts,
# if SCHEMA_LANG is empty, or ../word-weaver/src/config/schema.$SCHAMA_LANG.ts.
#
# E.g.:
#    ./gen-schemas.sh fr

set -o errexit

CONFIG_PATH=../word-weaver/src/config
if [[ $1 ]]; then
    CONFIG_FILE=schema."$1".ts
else
    CONFIG_FILE=schema.ts
fi
echo Using schema file "$CONFIG_PATH/$CONFIG_FILE"
cp "$CONFIG_PATH/$CONFIG_FILE" ./schema.ts
mkdir -p schemas

for type in Options Verbs Pronouns Conjugations; do
    echo Generating the schema for $type.
    npx typescript-json-schema --noExtraProps package.json $type > schemas/$type.jsonschema.json
done

rm ./schema.ts
