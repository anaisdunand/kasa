import { useState } from "react"
import chevron from "/src/assets/chevron.png"
import "/src/styles/shared/DropItem.scss"

export default function DropItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="item">
            <header className="item__header" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <h2 className="item__title">{title}</h2>
                <img className={`item__chevron ${isOpen ? "open" : ""}`} src={chevron} />
            </header>
            {isOpen ? <p className="item__content">{content}</p> : null}
        </article>
    )
}