import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import Header from "/src/components/Header"
import Main from "/src/components/Main"
import Footer from "/src/components/Footer"
import "/src/styles/index.scss"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    </StrictMode>
)