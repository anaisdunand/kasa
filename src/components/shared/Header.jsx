import { NavLink } from "react-router"

import logo from "/src/assets/logo.svg"
import "/src/styles/components/shared/Header.scss"

export default function Header() {
    function linkClass({ isActive }) {
        return `header__link ${isActive ? "header__link--active" : ""}`
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo de Kasa" />
            <nav className="header__nav">
                <NavLink className={linkClass} to="/kasa/" end>Accueil</NavLink>
                <NavLink className={linkClass} to="/kasa/a-propos">À Propos</NavLink>
            </nav>
        </header>
    )
}