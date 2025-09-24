import "/src/styles/components/RentalPage/HostCard.scss"

export default function HostCard({ host }) {
    const name = host.name
    const formattedName = name.replace(" ", "\n")

    return (
        <div className="host-card">
            <p className="host-card__name">{formattedName}</p>
            <img className="host-card__avatar" src={host.picture} alt="Photo de l'hôte" />
        </div>
    )
}