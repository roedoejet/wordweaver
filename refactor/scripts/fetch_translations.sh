#!/bin/sh
FETCH_LANG=$1

if [ -z "$1" ]; then
    echo "No language provided, you have to say what you're updating"
    exit 1
fi

if ! { [ "$1" = "en" ] || [ "$1" = "fr" ]; }; then
    echo "Your language must be supported."
    exit 1
fi

URL=$(curl -X POST https://api.poeditor.com/v2/projects/export \
     -F api_token="611d3987e3a7e94e57b049c0df8de613" \
     -F id="331037" \
     -F type="key_value_json" \
     -F language=$FETCH_LANG | jq -r '.result.url')

wget $URL -O ../projects/word-weaver/src/assets/i18n/$FETCH_LANG.json

