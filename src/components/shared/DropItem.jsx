import { useState } from "react"
import chevron from "/src/assets/chevron.png"
import "/src/styles/components/shared/DropItem.scss"

export default function DropItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className={`drop-item ${isOpen && "drop-item--open"}`}>
            <header className="drop-item__header" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <h2 className="drop-item__title">{title}</h2>
                <img className="drop-item__chevron" src={chevron} />
            </header>
                {Array.isArray(content) ? (
                    <ul className="drop-item__content">
                        {content.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : <p className="drop-item__content">{content}</p>}
        </article>
    )
}