import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div style={{ backgroundColor: darkMode ? 'white' : "#15023a" }}  className={"menu " + (menuOpen && "active")}>
            <ul style={{color: darkMode && '#15023a'}}>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
