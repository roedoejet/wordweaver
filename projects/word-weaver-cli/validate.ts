import * as fs from "fs";
import Ajv from "ajv";

let ajv = new Ajv({
  // allErrors: true,  // uncomment to get all the errors printed
  strict: true,
  verbose: true
});

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

function read_json_file(file_name: string) {
  try {
    return JSON.parse(String(fs.readFileSync(file_name)));
  } catch (error) {
    console.log(`ERROR: cannot read file ${file_name}: ${error}`);
    return null;
  }
}

function validate_file(file_prefix: string) {
  const schema_file_name = `./schemas/${capitalize(
    file_prefix
  )}.jsonschema.json`;
  const schema = read_json_file(schema_file_name);

  const data_file_name = `../word-weaver/src/assets/data/fr/v1/${file_prefix}.json`;
  const data = read_json_file(data_file_name);

  if (data == null || schema == null) {
    return false;
  }

  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (valid) {
    console.log(`OK: ${file_prefix}.json is valid`);
    return true;
  } else {
    console.log(
      `ERROR: ${file_prefix}.json is not valid. Here it the first error:`
    );
    console.log(validate.errors);
    return false;
  }
}

const file_prefixes = ["verbs", "pronouns", "options", "conjugations"];
let all_valid = true;
file_prefixes.forEach((file_prefix) => {
  all_valid = validate_file(file_prefix) && all_valid;
});
if (!all_valid) {
  process.exit(1);
}
