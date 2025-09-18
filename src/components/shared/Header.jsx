import "/src/styles/components/shared/Header.scss"

export default function Header({ main = false, children }) {
    return (
        <header className={`header ${main ? "header--main" : ""}`}>
            {children}
        </header>
    )
}