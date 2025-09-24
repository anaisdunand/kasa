import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import rentals from "/src/datas/rentals.json"

import Header from "/src/components/shared/Header"
import Footer from "/src/components/shared/Footer"

import Home from "/src/pages/Home"
import About from "/src/pages/About"
import RentalPage from "/src/pages/RentalPage"
import Error from "/src/pages/Error"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/kasa/" element={<Home rentals={rentals} />} />
                    <Route path="/kasa/a-propos" element={<About />} />
                    <Route path="/kasa/logement/:id" element={<RentalPage rentals={rentals} />} />
                    <Route path="/kasa/error-404" element={<Error />} />
                    <Route path="/kasa/*" element={<Navigate to="/kasa/error-404" />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}