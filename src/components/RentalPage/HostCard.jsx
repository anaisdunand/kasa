import "/src/styles/components/RentalPage/HostCard.scss"

export default function HostCard({ host }) {
    return (
        <div className="host-card">
            <p className="host-card__name">{host.name}</p>
            <img className="host-card__avatar" src={host.picture} alt="Photo de l'hôte" />
        </div>
    )
}