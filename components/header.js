import Link from "next/link"
import headerStyle from "./header.module.scss"

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a className={headerStyle.logo}>
          <strong>Editorial</strong> by HTML5 UP
        </a>
      </Link>
      <ul className={headerStyle.icons}>
        <i className="fas fa-coffee"></i>
        <i className="fas fa-file-signature"></i>
        <i className="fas fa-question-circle"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-google"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-slack"></i>
        <Link href="#"><a><i className="fab fa-twitter" /></a></Link>
        <Link href="#"><a><i className="fab fa-facebook-f" /></a></Link>
        <Link href="#"><a><i className="fab fa-google" /></a></Link>
        <Link href="#"><a><i className="fab fa-instagram-square" /></a></Link>
        <Link href="#"><a><i className="fab fa-slack" /></a></Link>
      </ul>
    </div>
  )
}


  