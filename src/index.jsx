import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, NavLink } from "react-router"

import rentals from "/src/datas/rentals.json"
import logo from "/src/assets/logo.svg"
import "/src/styles/index.scss"

import Header from "/src/components/shared/Header"
import Footer from "/src/components/shared/Footer"

import Home from "/src/pages/Home"
import About from "/src/pages/About"
import RentalPage from "/src/pages/RentalPage"
import Error from "/src/pages/Error"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header main>
                <img src={logo} alt="Logo de Kasa" />
                <nav className="header__nav">
                    <NavLink className="header__link" to="/kasa/" end>Accueil</NavLink>
                    <NavLink className="header__link" to="/kasa/a-propos">À Propos</NavLink>
                </nav>
            </Header>
            <main>
                <Routes>
                    <Route path="/kasa/" element={<Home rentals={rentals} />} />
                    <Route path="/kasa/a-propos" element={<About />} />
                    <Route path="/kasa/logement/:id" element={<RentalPage rentals={rentals} />} />
                    <Route path="/kasa/*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
)