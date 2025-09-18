import "/src/styles/components/RentalPage/TagsList.scss"

export default function TagsList({ tags }) {
    return (
        <ul className="tags-list">
            {tags.map((tag, i) =>
                <li key={i} className="tags-list__item">{tag}</li>
            )}
        </ul>
    )
}