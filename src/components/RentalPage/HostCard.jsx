import avatar from "/src/assets/profile-pic.jpg"
import "/src/styles/pages/RentalPage/HostCard.scss"

export default function HostCard() {
    return (
        <div className="host-card">
            <p className="host-card__name">Alexandre Dumas</p>
            <img className="host-card__avatar" src={avatar} alt="Photo de l'hôte" />
        </div>
    )
}