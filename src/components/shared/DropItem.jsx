import { useState } from "react"

import chevron from "/src/assets/chevron.png"
import "/src/styles/shared/DropItem.scss"

export default function DropItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="drop-item">
            <header className="drop-item__header" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <h2 className="drop-item__title">{title}</h2>
                <img className={`drop-item__chevron ${isOpen ? "drop-item__chevron--open" : ""}`} src={chevron} />
            </header>
            {isOpen ? <p className="drop-item__content">{content}</p> : null}
        </article>
    )
}