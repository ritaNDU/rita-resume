import {NavLink} from "react-router-dom"

export default function Menu() {
    return (
        <div id="menu">
            <NavLink className="menu_item"  to="/">Let's meet!
                <div className="line_under"></div>
            </NavLink>
            <NavLink className="menu_item" to="/experience">
                Experience
                <div className="line_under"></div>
            </NavLink>
            <NavLink className="menu_item" to="/projects">
                Projects
                <div className="line_under"></div>
            </NavLink>
            <NavLink className="menu_item" to="/contact">
                Contact me!
                <div className="line_under"></div>
            </NavLink>
        </div>

    );
}