import Banner from "/src/components/Banner"
import RentalsList from "/src/components/Home/RentalsList"
import "/src/styles/Home/index.scss"

export default function Home() {
    return (
        <section className="homepage">
            <Banner />
            <RentalsList />
        </section>
    )
}