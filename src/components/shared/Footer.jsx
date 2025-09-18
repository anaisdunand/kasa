import logo from "/src/assets/logo-white.svg"
import "/src/styles/components/shared/Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo de Kasa" />
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}