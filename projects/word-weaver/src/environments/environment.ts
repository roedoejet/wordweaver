// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { HIGHLIGHTS, LEVELS, META, TIERS, VALIDATION } from "../config/config";

const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver-UI",
  envName: "DEV",
  config: {
    tiers: TIERS,
    validation: VALIDATION,
    highlight: HIGHLIGHTS,
    level: LEVELS,
    meta: META
  },
  serverless: false,
  production: false,
  test: false,
  i18nPrefix: "",
  i18nDataPrefix: "//localhost/i18n/",
  firebase: {
    apiKey: "AIzaSyBkM2v1la_3Arbnt0qziB_TYQB0nFij3kk",
    authDomain: "wordweavertoy.firebaseapp.com",
    databaseURL: "https://wordweavertoy.firebaseio.com",
    projectId: "wordweavertoy",
    storageBucket: "wordweavertoy.appspot.com",
    messagingSenderId: "568985112547",
    appId: "1:568985112547:web:525d184b31008b60"
  },
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
    fontAwesome: packageJson.dependencies["@fortawesome/fontawesome-free"],
    angularCli: packageJson.devDependencies["@angular/cli"],
    typescript: packageJson.devDependencies["typescript"],
    cypress: packageJson.devDependencies["cypress"]
  }
};
