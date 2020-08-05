import Link from "next/link"
import footerStyle from "./footer.module.scss"

export default function Footer() {
  return (
    <p className="copyright">
      &copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  )
}