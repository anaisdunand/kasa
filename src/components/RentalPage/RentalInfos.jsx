import "/src/styles/components/RentalPage/RentalInfos.scss"

import TagsList from "/src/components/RentalPage/TagsList"
import HostCard from "/src/components/RentalPage/HostCard"
import Ratings from "/src/components/RentalPage/Ratings"
import DropItem from "/src/components/shared/DropItem"

export default function RentalInfos({ title, location, tags, rating, host, description, equipments }) {
    return (
        <div className="rental-infos">
            <header className="rental-infos__header">
                <div>
                    <h1 className="rental-infos__title">{title}</h1>
                    <p className="rental-infos__location">{location}</p>
                    <TagsList tags={tags} />
                </div>
                <div className="rental-infos__host">
                    <Ratings rating={rating} />
                    <HostCard host={host} />
                </div>
            </header>
            <div className="rental-infos__content">
                <DropItem title="Description" content={description} />
                <DropItem title="Équipements" content={equipments} />
            </div>
        </div>
    )
}