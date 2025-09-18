import { useParams, Navigate } from "react-router"
import "/src/styles/pages/RentalPage.scss"

import Banner from "/src/components/shared/Banner"
import Header from "/src/components/shared/Header"
import DropItem from "/src/components/shared/DropItem"

import TagsList from "/src/components/RentalPage/TagsList"
import HostCard from "/src/components/RentalPage/HostCard"
import Ratings from "/src/components/RentalPage/Ratings"

export default function RentalPage({ rentals }) {
    const { id } = useParams()
    const rental = rentals.find((r) => r.id === id)

    if(!rental) {
        return <Navigate to="/kasa/error" />
    }

    return (
        <section className="rental">
            <Banner pictures={rental.pictures} modifier={"bigger"} />
            <Header>
                <div>
                    <h1 className="header__title">{rental.title}</h1>
                    <p className="header__location">{rental.location}</p>
                    <TagsList tags={rental.tags} />
                </div>
                <div>
                    <HostCard host={rental.host} />
                    <Ratings rating={rental.rating} />
                </div>
            </Header>
            <div className="rental__content">
                <DropItem title="Description" content={rental.description} />
                <DropItem title="Équipements" content={rental.equipments} />
            </div>
        </section>
    )
}