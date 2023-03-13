# hyper

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```


## src/index.html

By Parcel2 conventions, the `index.html` is in `src/` folder.

## Aurelia 2 config

To control the behaviour of ShadownDOM and CSS-Module setup in Aurelia 2, create a section `"aurelia"` in the `package.json` file.
https://www.npmjs.com/package/@aurelia/parcel-transformer

## Playwright e2e test

You may need to install playwright test browsers if have not.

   npx playwright install --with-deps

All e2e tests are in `e2e/`.

Run e2e tests with:

    npm run test:e2e

Note the playwright config automatically runs "npm start" before playwright.

For more information, visit https://playwright.dev/docs/test-cli
