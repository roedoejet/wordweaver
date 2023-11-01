// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {
  HIGHLIGHTS,
  LEVELS,
  META_DATA,
  TIERS,
  VALIDATION,
} from "../config/config";

const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver",
  envName: "DEV",
  config: {
    tiers: TIERS,
    validation: VALIDATION,
    highlight: HIGHLIGHTS,
    level: LEVELS,
    meta: META_DATA,
  },
  production: false,
  test: false,
  base: "",
  dataPrefix: `/assets/data/fr/v1/`,
  dataTestPrefix: `/assets/data/fr/v2/`,
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies["@angular/core"],
    ngrx: packageJson.dependencies["@ngrx/store"],
    material: packageJson.dependencies["@angular/material"],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies["@ngx-translate/core"],
    fontAwesome: packageJson.dependencies["@fortawesome/fontawesome-free"],
    angularCli: packageJson.devDependencies["@angular/cli"],
    typescript: packageJson.devDependencies["typescript"],
  },
};
