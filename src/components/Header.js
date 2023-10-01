import { NavLink } from "react-router-dom";
import Menu from "./Menu"

export default function Header() {
    return (
        <header>
            <NavLink className="name" to="/"><h1>Rita Merhej</h1></NavLink>
            <Menu />
        </header>

    );
}