// Next.JSはのCSSモジュールは、コンポーネントごとのスタイルに便利です。
// また、ページごとまたは全てのページにいくつかのCSSを共通して読み込ませたい場合にも対応しています。
// それが、Appコンポーネントです。
// このAppコンポーネントは、すべての異なるページに共通するトップレベルのコンポーネント。
// 例えば、ページ間を移動する際に状態を保持するために、このAppコンポーネントを使用することができます。
// つまり、ここでレセット、グローバルCSSを設定できるということです。

import "../styles/reset.scss"
import "../styles/global.scss"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}