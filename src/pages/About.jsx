import about from "/src/datas/about.json"
import banner from "/src/assets/about-banner.jpg"
import "/src/styles/pages/About.scss"

import Banner from "/src/components/shared/Banner"
import DropItem from "/src/components/shared/DropItem"

export default function About() {
    return (
        <section className="about">
            <Banner src={banner} shade={"dark"} />
            <div className="about__infos">
                {about.map(item => (
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