#!/bin/bash

# Usage:
#    ./compress.sh <data_lang> <data_version>
#
# Compress all the data files associated with a word-weaver model.
# Looks for the files containing {verbs,options,pronouns,conjugations}.json
# in the directory ../word-weaver/src/assets/data/<data_lang>/<data_version>
# E.g.:
#    ./compress.sh fr v1

if [[ $# -ne 2 ]]; then
    echo "ERROR: missing or extra command line argument(s)"
    echo "Usage: ./compress.sh <data_lang> <data_version>"
    echo "   or: npm run compress <data_lang> <data_version>"
    echo " e.g.: npm run compress fr v1"
    exit 1
fi

DATA_LANG=$1
DATA_VERSION=$2
DATA_DIR=../word-weaver/src/assets/data/${DATA_LANG}/${DATA_VERSION}

EXIT_STATUS=0

for file_base in verbs options pronouns conjugations; do
    file_name="$DATA_DIR/$file_base.json"
    if [[ ! -e "$file_name" && -e "$file_name.gz" ]]; then
        echo "$file_name.gz is only available compressed... OK"
    elif [[ -e "$file_name" ]]; then
        if [[ -e "$file_name.gz" ]]; then
            echo -n "Re-compressing $file_name... "
        else
            echo -n "Compressing $file_name... "
        fi
        if gzip -9 < "$file_name" > "$file_name.gz"; then
            echo OK
        else
            echo ERROR: error running gzip command
            EXIT_STATUS=1
        fi
    else
        echo "ERROR: $file_name not found."
        EXIT_STATUS=1
    fi
done

exit $EXIT_STATUS
