import * as fs from "fs";
import Ajv from "ajv";
//const schema = require("./Conjugations.jsonschema.json")
import Schema from "./schemas/Conjugations.jsonschema.json" assert { type: "json" };
//import Conjugations from "./conjugations.json" assert { type: "json" }
import Conjugations from "../word-weaver/src/assets/data/fr/v1/conjugations.json" assert { type: "json" };

console.log("Schema", JSON.stringify(Schema));
//console.log("Conjugations", Conjugations)

let ajv = new Ajv({
  verbose: true
  // allErrors: true
});
const validate = ajv.compile(Schema);
const valid = validate(Conjugations);
if (valid) {
  console.log("OK: conjugations.json is valid");
} else {
  console.log(
    "ERROR: conjugations.json is not valid. Here it the first error:"
  );
  console.log(validate.errors);
}

//const parse = ajv.compileParser(Schema);

//function parseAndLog(json) {
//  const data = parse(json);
//  if (data === undefined) {
//    console.log(parse.message); // error message from the last parse call
//    console.log(parse.position); // error position in string
//  } else {
//    console.log(data);
//  }
//}
//
//const conj_str = fs.readFileSync("conjugations.json")
//parseAndLog(conj_str)
