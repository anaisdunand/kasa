import "/src/styles/shared/Banner.scss"

export default function Banner({background, children}) {
    return (
        <div className="banner">
            <img className="banner__image" src={background} alt="Photo de paysage" />
            {children}
        </div>
    ) 
}