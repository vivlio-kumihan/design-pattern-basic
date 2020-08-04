// fontawsome+next.js+sassの組み合わせで
// アプリを制作した場合必要な設定。
const withSass = require("@zeit/next-sass")
const withFonts = require("next-fonts");

module.exports = withFonts(
  withSass({
    webpack(config, options) {
      // custom webpack loaders if you need
      return config;
    }
  })
)

module.exports = withSass({
  // SassでCSS Modulesを効かせる。
  cssModules: true
})
