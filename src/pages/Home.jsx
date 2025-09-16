import background from "/src/assets/home-banner.jpg"
import "/src/styles/pages/Home/index.scss"

import Banner from "/src/components/shared/Banner"
import RentalsList from "/src/components/Home/RentalsList"

export default function Home() {
    return (
        <section className="homepage">
            <Banner modifier={"darker"} src={background} alt={"de paysage"}>
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </Banner>
            <RentalsList />
        </section>
    )
}