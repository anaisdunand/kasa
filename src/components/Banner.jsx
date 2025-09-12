import background from "/src/assets/banner-background.jpg"
import "/src/styles/shared/Banner.scss"

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__image" src={background} alt="Photo de paysage" />
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    ) 
}