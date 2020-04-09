const packageJson = require("../../../../package.json");

export const environment = {
  appName: "WordWeaver-UI",
  envName: "PROD",
  production: true,
  test: false,
  i18nPrefix: "/wordweaver-UI",
  firebase: {
    apiKey: "AIzaSyB8Rh04f4p61cphLkDAIoOozvESbUrweAA",
    authDomain: "kawennonis.firebaseapp.com",
    databaseURL: "//kawennonis.firebaseio.com",
    projectId: "kawennonis",
    storageBucket: "//kawennonis.appspot.com",
    messagingSenderId: "711160847583"
  },
  base: `//kawennonnis.herokuapp.com`,
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
