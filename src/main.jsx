import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

import Header from "/src/components/Header"
import Home from "/src/pages/Home"
import About from "/src/pages/About"
import Footer from "/src/components/Footer"
import "/src/styles/main.scss"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
)