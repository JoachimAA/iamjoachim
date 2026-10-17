# How to deploy

To deploy the site simply run `npm run deploy`

deployment will run the `build` script from the `package.json`, it will run a typecheck and also create an index.html for all routes in the project. If you need to add new routes you need to also update `create-routes.mjs` so that those routes do not 404 when loading them directly in the browser.
