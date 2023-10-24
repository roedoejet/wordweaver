import * as fs from "fs";
import Ajv from "ajv";
import { argv } from "process";

const DATA_LANG = argv[2] || "fr";
const DATA_VERSION = argv[3] || "v1";
const DATA_DIR = `../word-weaver/src/assets/data/${DATA_LANG}/${DATA_VERSION}`;

let ajv = new Ajv({
  // allErrors: true,  // uncomment to get all the errors printed
  strict: true,
  verbose: true
});

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

const read_json_file = (file_name: string) => {
  try {
    return JSON.parse(String(fs.readFileSync(file_name)));
  } catch (error) {
    console.log(`ERROR: cannot read file ${file_name}: ${error}`);
    return null;
  }
};

const validate_file = (file_prefix: string) => {
  const schema_file_name = `./schemas/${capitalize(
    file_prefix
  )}.jsonschema.json`;
  const schema = read_json_file(schema_file_name);

  const data_file_name = `${DATA_DIR}/${file_prefix}.json`;
  const data = read_json_file(data_file_name);

  if (data == null || schema == null) {
    return false;
  }

  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (valid) {
    console.log(`OK: ${data_file_name} is valid`);
    return true;
  } else {
    console.log(
      `ERROR: ${data_file_name} is not valid. Here it the first error:`
    );
    console.log(validate.errors);
    return false;
  }
};

const file_prefixes = ["verbs", "pronouns", "options", "conjugations"];
let all_valid = true;
file_prefixes.forEach((file_prefix) => {
  all_valid = validate_file(file_prefix) && all_valid;
});
if (!all_valid) {
  process.exit(1);
}
