import * as React from "react"
import { Link } from "gatsby"
import * as Style from "./style.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
    return (
        <main className={Style.main}>
            <title>Massimo Bortolato | Freelance engineer</title>
            <div className={Style.menu}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Contatti</Link>
                    </li>
                    <li>
                        <Link to="/">Contatti</Link>
                    </li>
                    <li>
                        <Link to="/">Contatti</Link>
                    </li>
                </ul>
            </div>
            <div className={Style.header}>
                <h1>Massimo Bortolato</h1>
                <h2>freelance engineer</h2>
            </div>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/bg1.webp"
            />
            <div className={Style.blocks}>
                <div>Signal & Image Processing</div>
                <div>Artificial Intelligence</div>
                <div>Software development</div>
            </div>
            <div className={Style.contacts}>
                <p>Massimo Bortolato</p>
                <p>Mogliano Veneto (TV)</p>
                <p>massimo.bortolato@gmail.com</p>
            </div>
        </main>
    )
}
export default IndexPage
