
// export default function HelloWorld() {
//   return (
//     <div className={styles.hello}>
//       Hello World, I am being styled using SCSS Modules!
//     </div>
//   )
// }

import Head from "next/head"
import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
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
        <script src="https://kit.fontawesome.com/7565fc2928.js" crossorigin="anonymous"></script>
      </Head>

      <Header />

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
      
      <Footer />
    </div>
  )
}