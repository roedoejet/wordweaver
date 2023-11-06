## Validation for data files

To generate schemas, run validation, and compress the data files, run (this can be done from the root as well):

```
npm install
npm run-script generate-schemas fr
npm run-script validate fr v1
# only run compression when your server supports including the proper Content-Type: application/json and Content-Encoding: gzip response headers. i.e. not for deployment with GitHub Pages
npm run-script compress fr v1
```
