import { useState } from "react"
import "/src/styles/components/RentalPage/Slider.scss"

export default function Slider({ pictures }) {
    const total = pictures.length
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const prevIndex = (currentIndex - 1 + total) % total
    const nextIndex = (currentIndex + 1) % total
    const slideIndexes = [prevIndex, currentIndex, nextIndex]

    const slidePictures = [
        pictures[prevIndex],
        pictures[currentIndex],
        pictures[nextIndex]
    ]

    const changeSlide = ((position, index) => {
        setIsTransitioning(true)
        setCurrentPosition(position)

        setTimeout(() => {
            setCurrentIndex(index)
            setIsTransitioning(false)
            setCurrentPosition(1)
        }, 600)
    })

    const prevSlide = (() => changeSlide(0, prevIndex))
    const nextSlide = (() => changeSlide(2, nextIndex))

    return (
        <div className="slider">
            <div
                className={`slider__track ${isTransitioning ? "slider__track--transition" : ""}`}
                style={{ transform: `translateX(-${currentPosition * 100}%)` }}
            >
                {slidePictures.map((pic, i) => 
                    <img
                        key={i}
                        className="slider__image"
                        src={pic}
                        alt={`Photo du logement - ${slideIndexes[i] + 1}/${total}`}
                    />
                )}
            </div>
            <div className="slider__nav">
                <button className="slider__button" onClick={prevSlide} />
                <span className="slider__index">
                    {currentIndex + 1}/{total}
                </span>
                <button
                    className="slider__button slider__button--right"
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}