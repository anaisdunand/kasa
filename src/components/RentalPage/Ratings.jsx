import "/src/styles/pages/RentalPage/Ratings.scss"

export default function Ratings() {
    return (
        <div className="ratings">
            <span className="ratings__star ratings__star--active"></span>
            <span className="ratings__star ratings__star--active" />
            <span className="ratings__star ratings__star--active" />
            <span className="ratings__star" />
            <span className="ratings__star" />
        </div>
    )
}