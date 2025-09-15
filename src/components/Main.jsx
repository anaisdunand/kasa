import { Routes, Route } from "react-router"
import Home from "/src/pages/Home"
import About from "/src/pages/About"
import RentalPage from "/src/pages/RentalPage"
import Error from "/src/pages/Error"

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/kasa" element={<Home />} />
                <Route path="/kasa/a-propos" element={<About />} />
                <Route path="/kasa/fiche-logement" element={<RentalPage />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    )
}