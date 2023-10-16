## Validation for data files

To generate schemas, run validation, and compress the data files, run:

```
cd projects/word-weaver-cli
npm install
SCHEMA_LANG=fr ./gen-schemas.sh
export DATA_DIR=../word-weaver/src/assets/data/fr/v1
./validate.sh
./compress.sh
```
