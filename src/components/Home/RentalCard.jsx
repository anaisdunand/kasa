import { Link } from "react-router"

import "/src/styles/pages/Home/RentalCard.scss"

export default function RentalCard({ cover, title }) {
    return (
        <article className="card">
            <img className="card__image" src={cover} />
            <Link className="card__link" to="/kasa/logement">
                <h2 className="card__title">{title}</h2>
            </Link>
        </article>
    )
}