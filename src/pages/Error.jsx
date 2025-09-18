import { Link } from "react-router"
import "/src/styles/pages/Error.scss"

export default function Error() {
    return (
        <section className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="error__link" to="/kasa/">Retourner sur la page d'accueil</Link>
        </section>
    )
}