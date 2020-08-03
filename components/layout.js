
// export default function HelloWorld() {
//   return (
//     <div className={styles.hello}>
//       Hello World, I am being styled using SCSS Modules!
//     </div>
//   )
// }

import Head from "next/head"
import Link from "next/link"
import layoutStyle from "./layout.module.scss"
// import utilStyle from "../styles/util.module.css"

export const siteTitle = "HTML5+CSS3 Basic Sample"

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyle.container}>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HTML5+CSS3 WEB SITE 構築のためのサンプル" />
      </Head>
      <header className={layoutStyle.headerContents}>
        header
        {/* <div className={layoutStyle.headerLogo}>
          <img src="/images/nishipri-logo.png" width="500px" alt="logo" />
        </div>
        <nav className={layoutStyle.mainNav}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/company">
            <a>COMPANY</a>
          </Link>
          <Link href="/access">
            <a>ACCESS</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
          <Link href="/blog">
          <a>BLOG</a>
          </Link>
        </nav> */}
      </header>
      <main className={layoutStyle.mainContents}>
        {children}
        {!home && (
          <div className={layoutStyle.backToHome}>
            <Link href="/">
              <a>← Back to Home</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}