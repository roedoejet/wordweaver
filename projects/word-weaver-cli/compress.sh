#!/bin/bash

# Usage: cd projects/word-weaver-cli; ./compress.sh
# Compress all the data files associated with a word-weaver model

DATA_DIR=../word-weaver/src/assets/data/fr/v1

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
