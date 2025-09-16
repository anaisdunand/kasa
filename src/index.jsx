import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

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
            <Header />
            <main>
                <Routes>
                    <Route path="/kasa/" element={<Home />} />
                    <Route path="/kasa/a-propos" element={<About />} />
                    <Route path="/kasa/logement" element={<RentalPage />} />
                    <Route path="/kasa/*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
)