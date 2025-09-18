import "/src/styles/components/shared/Banner.scss"
import Slider from "/src/components/shared/Slider"

export default function Banner({ image, pictures, modifier, children }) {
    const total = pictures ? pictures.length : 0

    return (
        <>
            {(image || total === 1) ? (
                <div className={`banner banner--${modifier}`}>
                   <img
                        className="banner__image"
                        src={image || pictures[0]}
                        alt="Bannière"
                    />
                    {children}
                </div>
            ) : <Slider total={total} pictures={pictures} />}
        </>
    ) 
}