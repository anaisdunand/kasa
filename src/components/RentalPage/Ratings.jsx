import "/src/styles/components/RentalPage/Ratings.scss"

export default function Ratings({ rating }) {
    return (
        <div className="ratings">
            {Array.from({ length: 5 }, (_, i) =>
                <span
                    key={i}
                    className={`ratings__star ${i < Number(rating) ? "ratings__star--active" : null}`}
                />
            )}
        </div>
    )
}