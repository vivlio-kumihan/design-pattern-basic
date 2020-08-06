import Link from "next/link"
import Layout from '../components/layout'
import headerStyle from '../components/header.module.scss'
import commonStyle from "../styles/commonStyle.module.scss"
import commonLayout from "../styles/commonLayout.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'

export default function Elements() {
  return (
  <Layout>
    <section>
      <header>
        <h1>Elements</h1>
      </header>
      <h2>Sample Content</h2>
      <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.</p>
      <div className={commonLayout.row}>
        <div className={commonLayout.col06}>
          <h3>Sem turpis amet semper</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
        </div>
          <div className={commonLayout.col06}>
          <h3>Magna odio tempus commodo</h3>
          <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan.</p>
        </div>
      </div>
      <div className={commonLayout.row}>
          <div className={commonLayout.col04}>
          <h3>Interdum sapien gravida</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
          <div className={commonLayout.col04}>
          <h3>Faucibus consequat lorem</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
          <div className={commonLayout.col04}>
          <h3>Accumsan montes viverra</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
      </div>

      <hr />

      <h2>Elements</h2>
      <div className={commonLayout.row}>
        <div className={commonLayout.col06}>

          {/* Text stuff */}
          <h3>Text</h3>
            <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                          This is <sup>superscript</sup> text <sup>上付き文字</sup>と<sub>下付き文字</sub>はあまり使用していないand this is <sub>subscript</sub> text.
                          This is <u>underlined</u> and this is code: <code>for (;;) <strong>この環境でブレースを書くとエラーになる。つまりHTML内にサンプルコードを掲載できない。これは問題。</strong></code>.
                          Finally, this is a <a href="#">link</a>.</p>

          <hr />

          <h1>Heading Level 1</h1>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>

          <hr />

          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

          {/* Lists */}
          <h3>Lists</h3>
          <h4>Unordered</h4>
          <ul>
            <li>Dolor etiam magna etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis dolore viverra.</li>
          </ul>
          <h4>Alternate</h4>
          <ul className={commonStyle.altUl}>
              <li>Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. </li>
              <li>Sagittis lorem eleifend. Sagittis lorem eleifend. Sagittis lorem eleifend. Sagittis lorem eleifend. Sagittis lorem eleifend. </li>
              <li>Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. Felis feugiat viverra. </li>
          </ul>

          <h4>Ordered</h4>
          <ol>
              <li>Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam.</li>
              <li>Etiam vel lorem sed viverra.Etiam vel lorem sed viverra.Etiam vel lorem sed viverra.Etiam vel lorem sed viverra.Etiam vel lorem sed viverra.Etiam vel lorem sed viverra.</li>
              <li>Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.</li>
              <li>Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. Dolor etiam magna etiam. </li>
              <li>Etiam vel lorem sed viverra. Etiam vel lorem sed viverra. Etiam vel lorem sed viverra. Etiam vel lorem sed viverra. </li>
              <li>Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra. Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra.Felis dolore viverra. </li>
          </ol>
          <h4>Icons</h4>
          <ul>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faTwitter} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faFacebookF} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faInstagramSquare} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faGithub} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faSlack} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faDribbble} /></a></Link>
            <Link href="#"><a className={headerStyle.anchor}><FontAwesomeIcon icon={faTumblr} /></a></Link>
          </ul>
          <h4>Definition</h4>
          <dl>
            <dt>Item1</dt>
            <dd>
              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
            </dd>
            <dt>Item2</dt>
            <dd>
              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
            </dd>
            <dt>Item3</dt>
            <dd>
              <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  </Layout>
  )
}