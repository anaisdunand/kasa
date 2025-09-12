import RentalCard from "/src/components/Home/RentalCard"
import "/src/styles/Home/RentalsList.scss"

export default function RentalsList() {
    return (
        <div className="rentals">
            <RentalCard />
            <RentalCard />
            <RentalCard />
            <RentalCard />
            <RentalCard />
            <RentalCard />
        </div>
    )
}