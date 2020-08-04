import Link from "next/link"
import headerStyle from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a className={headerStyle.logo}>
          <strong>Editorial</strong> by HTML5 UP
        </a>
      </Link>
      <ul>
        <Link href="#"><a><FontAwesomeIcon icon={faTwitter} /></a></Link>
        <Link href="#"><a><FontAwesomeIcon icon={faFacebookF} /></a></Link>
        <Link href="#"><a><FontAwesomeIcon icon={faApple} /></a></Link>
        <Link href="#"><a><FontAwesomeIcon icon={faSlack} /></a></Link>
        <Link href="#"><a><FontAwesomeIcon icon={faInstagramSquare} /></a></Link>
      </ul>
    </div>
  )
}

  