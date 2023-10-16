#!/bin/bash

# Usage:
#    cd projects/word-weaver-cli
#    DATA_DIR=path/to/data/dir ./validate.sh
#
# Validate all the data file in $DATA_DIR against the json schema
# $DATA_DIR should contain {verbs,options,pronouns,conjugations}.json
#
# E.g.:
#    DATA_DIR=../word-weaver/src/assets/data/fr/v1 ./compress.sh

npx ts-node validate.ts
