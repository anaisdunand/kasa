import aboutItems from "/src/datas/about-items.json"
import background from "/src/assets/about-banner.jpg"
import Banner from "/src/components/shared/Banner"
import DropItem from "/src/components/shared/DropItem"
import "/src/styles/About/index.scss"

export default function About() {
    return (
        <section className="about">
            <Banner background={background} />
            <div className="about__infos">
                {aboutItems.map(item => (
                    <DropItem
                        key={item.id}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </section>
    )
}