import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, store, urlPath, publicPath, redirect }) => {
  console.log("Welcome To Bomiot")
})
