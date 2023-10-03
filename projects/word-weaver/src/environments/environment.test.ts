import { HIGHLIGHTS, LEVELS, META, TIERS, VALIDATION } from "../config/config";

const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver-UI",
  envName: "TEST",
  config: {
    tiers: TIERS,
    validation: VALIDATION,
    highlight: HIGHLIGHTS,
    level: LEVELS,
    meta: META
  },
  serverless: false,
  production: false,
  test: true,
  i18nPrefix: "",
  i18nDataPrefix: "/i18n/",
  base: `//localhost`,
  prefix: `/api/v1/`,
  testPrefix: `/api/v2/`,
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
