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
    : '/'
}
