// module.exports = {
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {
//       config.output.publicPath = `${process.cwd()}/dist/`
//     }
//   }
// }
//
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `${process.cwd()}/dist/`
    : '/',
    // if (process.env.NODE_ENV === 'production') {
    //     config.output.publicPath = `${process.cwd()}/dist/`
    // }
    configureWebpack: config => {
        config.target = 'electron-renderer' //Allow to require("electron") in renderer (main.js) process without using window.require
    }

    // css: {
    // loaderOptions: {
    //     sass: {
    //             data: `@import "@/styles/_variables.scss";`
    //         }
    //     }
    // }
    // externals: [
    //     (function () {
    //       var IGNORES = [
    //         'electron'
    //       ];
    //       return function (context, request, callback) {
    //         if (IGNORES.indexOf(request) >= 0) {
    //           return callback(null, "require('" + request + "')");
    //         }
    //         return callback();
    //       };
    //     })()
    //   ]
// pluginOptions: {
//     electronBuilder: {
//       externals: ['electron']
//     }
//   }
}
