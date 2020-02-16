require("dotenv").config();
// const path = require(‘path’)
// const SWPrecacheWebpackPlugin = require(‘sw-precache-webpack-plugin’)

module.exports = {
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' }
  //   }
  // },
  env: {
    API_URL: process.env.API_URL
  }
  // webpack: (config, {dev}) => {
  //   const oldEntry = config.entry
  //   config.entry = () => oldEntry().then(entry => {
  //     entry[‘main.js’].push(path.resolve(‘./utils/offline’))
  //     return entry
  //   })
  //   if(!dev){
  //     config.plugins.push(new SWPrecacheWebpackPlugin({
  //       cacheId: ‘test-lighthouse’,
  //       filepath: path.resolve(‘./static/sw.js’),
  //       staticFileGlobs: [
  //         ‘static/**/*’
  //       ],
  //       minify: true,
  //       staticFileGlobsIgnorePatterns: [/\.next\//],
  //       runtimeCaching: [{
  //         handler: ‘fastest’,
  //         urlPattern: /[.](png|jpg|css)/
  //       },{
  //         handler: ‘networkFirst’,
  //         urlPattern: /^http.*/
  //       }]
  //     }))
  //   }
  //   return config
  // }
}