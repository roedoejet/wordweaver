#!/bin/sh
API_TOKEN=$(cat poeditor_api_token.txt)
LANG=$1

if [ -z "$1" ]; then
    echo "No language provided, you have to say what you're updating"
    exit 1
fi

if ! { [ "$1" = "en" ] || [ "$1" = "fr" ]; }; then
    echo "Your language must be supported."
    exit 1
fi

curl -X POST https://api.poeditor.com/v2/projects/upload \
     -F api_token="$API_TOKEN" \
     -F id="331037" \
     -F updating="terms_translations" \
     -F sync_terms=0 \
     -F language=$LANG \
     -F file=@"../projects/word-weaver/src/assets/i18n/$LANG.json"