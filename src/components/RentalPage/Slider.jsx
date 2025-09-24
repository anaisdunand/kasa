import { useState } from "react"
import "/src/styles/components/RentalPage/Slider.scss"

export default function Slider({ pictures }) {
    const total = pictures.length
    const [currentIndex, setCurrentIndex] = useState(0)
        
    const prevSlide = (() => {
        setCurrentIndex((i) =>
            i === 0 ? total - 1 : i - 1
        )
    })
    const nextSlide = (() => {
        setCurrentIndex((i) =>
            i === total - 1 ? 0 : i + 1
        )
    })

    return (
        <div className="slider">
            <div className="slider__track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {pictures.map((pic, i) =>
                    <img key={i}
                        className="slider__image"
                        src={pic}
                        alt={`Photo du logement - ${i + 1}/${total}`}
                    />
                )}
            </div>
            <div className="slider__nav">
                <button className="slider__button" onClick={prevSlide} />
                <span className="slider__index">
                    {currentIndex + 1}/{total}
                </span>
                <button className="slider__button slider__button--right"
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}