import { NavLink } from "react-router"
import logo from "/src/assets/logo.svg"
import "/src/styles/shared/Header.scss"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Kasa" />
            <nav className="header__nav">
                <NavLink className="header__link" to="/kasa/" end>Accueil</NavLink>
                <NavLink className="header__link" to="/kasa/a-propos">À Propos</NavLink>
            </nav>
        </header>
    )
}