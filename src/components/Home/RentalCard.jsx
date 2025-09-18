import { Link } from "react-router"
import "/src/styles/components/Home/RentalCard.scss"

export default function RentalCard({ cover, id, title }) {
    return (
        <article className="card">
            <img className="card__image" src={cover} />
            <Link className="card__link" to={`/kasa/logement/${id}`}>
                <h2 className="card__title">{title}</h2>
            </Link>
        </article>
    )
}