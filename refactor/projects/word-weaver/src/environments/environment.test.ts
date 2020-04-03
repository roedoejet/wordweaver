const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver-UI",
  envName: "TEST",
  production: false,
  test: true,
  i18nPrefix: "",
  firebase: {
    apiKey: "AIzaSyBkM2v1la_3Arbnt0qziB_TYQB0nFij3kk",
    authDomain: "wordweavertoy.firebaseapp.com",
    databaseURL: "https://wordweavertoy.firebaseio.com",
    projectId: "wordweavertoy",
    storageBucket: "wordweavertoy.appspot.com",
    messagingSenderId: "568985112547",
    appId: "1:568985112547:web:525d184b31008b60"
  },
  base: `//localhost:5000`,
  prefix: `/api/v1/`,
  test_prefix: `/api/v2/`,
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
