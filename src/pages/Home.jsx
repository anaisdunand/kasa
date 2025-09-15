import background from "/src/assets/home-banner.jpg"
import Banner from "/src/components/shared/Banner"
import RentalsList from "/src/components/Home/RentalsList"
import "/src/styles/Home/index.scss"

export default function Home() {
    return (
        <section className="homepage">
            <Banner background={background}>
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </Banner>
            <RentalsList />
        </section>
    )
}