#!/bin/bash

# Usage:
#    cd projects/word-weaver-cli
#    SCHEMA_LANG=lang_code ./gen-schemas.sh
#
# Generate JSON schema files for data validation from ../word-weaver/src/config/schema.ts,
# if SCHEMA_LANG is empty, or ../word-weaver/src/config/schema.$SCHAMA_LANG.ts.
#
# E.g.:
#    DATA_DIR=../word-weaver/src/assets/data/fr/v1 ./compress.sh

set -o errexit

CONFIG_PATH=../word-weaver/src/config
if [[ $SCHEMA_LANG ]]; then
    CONFIG_FILE=schema."$SCHEMA_LANG".ts
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
