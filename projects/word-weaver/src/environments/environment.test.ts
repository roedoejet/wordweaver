import { HIGHLIGHTS, LEVELS, META, TIERS, VALIDATION } from "../config/config";

const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver",
  envName: "TEST",
  config: {
    tiers: TIERS,
    validation: VALIDATION,
    highlight: HIGHLIGHTS,
    level: LEVELS,
    meta: META
  },
  production: false,
  test: true,
  base: `//localhost:4200`,
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
    fontAwesome:
      packageJson.dependencies["@fortawesome/fontawesome-free-webfonts"],
    angularCli: packageJson.devDependencies["@angular/cli"],
    typescript: packageJson.devDependencies["typescript"],
    cypress: packageJson.devDependencies["cypress"]
  }
};
