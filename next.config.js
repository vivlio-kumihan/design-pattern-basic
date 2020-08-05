// fontawsome+next.js+sassの組み合わせで
// アプリを制作した場合必要な設定。
const withSass = require("@zeit/next-sass")

module.exports = withSass({
  // SassでCSS Modulesを効かせる。
  cssModules: true
})