import banner from "/src/assets/home-banner.jpg"
import "/src/styles/pages/Home.scss"

import Banner from "/src/components/shared/Banner"
import RentalCard from "/src/components/Home/RentalCard"

export default function Home({ rentals }) {
    return (
        <section className="homepage">
            <Banner src={banner} shade={"darker"}>
                <h1 className="banner__title">
                    {"Chez vous,\npartout et ailleurs"}
                </h1>
            </Banner>
            <div className="homepage__rentals">
                {rentals.map(rental =>
                    <RentalCard
                        key={rental.id}
                        id={rental.id}
                        title={rental.title}
                        cover={rental.cover}
                    />
                )}
            </div>
        </section>
    )
}