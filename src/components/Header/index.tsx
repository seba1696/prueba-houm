import { Search } from "components/Search"
import { Link } from "react-router-dom"
import houmLogo from "assets/img/houmLogo.svg"
import "./index.css"

export const Header = () => (
    <header className="app-header">
        <Link to="/">
            <img alt="Logo" src={houmLogo} className="app-logo" />
            <span>Movie</span>
        </Link>
        <Search />
    </header>
)
