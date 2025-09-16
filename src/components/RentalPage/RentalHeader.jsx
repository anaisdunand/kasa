import "/src/styles/pages/RentalPage/RentalHeader.scss"

import TagsList from "/src/components/RentalPage/TagsList"
import HostCard from "/src/components/RentalPage/HostCard"
import Ratings from "/src/components/RentalPage/Ratings"

export default function RentalHeader() {
    return (
        <header className="rental-header">
            <div>
                <h1 className="rental-header__title">Cozy loft on the Canal Saint-Martin</h1>
                <p className="rental-header__subtitle">Paris, Ile de France</p>
                <TagsList />
            </div>
            <div>
                <HostCard />
                <Ratings />
            </div>
        </header>
    )
}