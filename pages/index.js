import Layout from '../components/layout'
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <h1>
        main contetns
      </h1>
      <ul>
        <li>
          <Link href="/elements">
            <a>Elements</a>
          </Link>
          </li>
        <li>
          <Link href="/generic">
            <a>Generic</a>
          </Link>
        </li>
        <li>
          <a>Sub menu</a>
        </li>
      </ul>
    </Layout>
  )
}
