import background from "/src/assets/rental-banner.jpg"
import "/src/styles/pages/RentalPage/index.scss"

import Banner from "/src/components/shared/Banner"
import RentalHeader from "/src/components/RentalPage/RentalHeader"
import DropItem from "/src/components/shared/DropItem"

export default function RentalPage() {
    return (
        <section className="rental">
            <Banner modifier={"bigger"} src={background} alt={"d'intérieur"}>
                <div className="banner__nav">
                    <button className="banner__button" />
                    <span className="banner__index">1/4</span>
                    <button className="banner__button banner__button--right" />
                </div>
            </Banner>
            <RentalHeader />
            <div className="rental__content">
                <DropItem title="Description" content="contenu" />
                <DropItem title="Équipements" content="contenu" />
            </div>
        </section>
    )
}