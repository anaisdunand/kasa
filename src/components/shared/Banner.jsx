import "/src/styles/shared/Banner.scss"

export default function Banner({ modifier, src, alt, children }) {
    return (
        <div className={`banner banner--${modifier}`}>
            <img className="banner__image" src={src} alt={`Photo ${alt}`} />
            {children}
        </div>
    ) 
}