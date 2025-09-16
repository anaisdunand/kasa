import rentals from "/src/datas/rentals.json"
import "/src/styles/pages/Home/RentalsList.scss"

import RentalCard from "/src/components/Home/RentalCard"

export default function RentalsList() {
    return (
        <div className="rentals">
            {rentals.map(rental =>
                <RentalCard
                    key={rental.id}
                    title={rental.title}
                    cover={rental.cover}
                />
            )}
        </div>
    )
}