import { useParams, Navigate } from "react-router"

import Banner from "/src/components/shared/Banner"
import Slider from "/src/components/RentalPage/Slider"
import RentalInfos from "/src/components/RentalPage/RentalInfos"

export default function RentalPage({ rentals }) {
    const { id } = useParams()
    const rental = rentals.find((r) => r.id === id)

    if(!rental) return <Navigate to="/kasa/error-404" />
    else return (
        <section>
            {rental.pictures.length > 1
                ? <Slider pictures={rental.pictures} />
                : <Banner src={rental.pictures[0]} bigger />
            }
            <RentalInfos
                title={rental.title}
                location={rental.location}
                tags={rental.tags}
                host={rental.host}
                rating={rental.rating}
                description={rental.description}
                equipments={rental.equipments}
            />
        </section>
    )
}