import "/src/styles/components/shared/Banner.scss"

export default function Banner({ bigger = false, shade, src, children }) {
    return (
        <div className={`banner ${bigger ? "banner--bigger" : ""}`}>
            <img
                className={`banner__image ${shade ? `banner__image--${shade}` : ""}`}
                src={src}
                alt={bigger ? "Photo du logement" : "Bannière"}
            />
            {children}
        </div>
    )
}