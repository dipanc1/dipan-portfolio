import './topbar.scss'
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Dipan's Portfolio.</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span><a href="tel:+919592738038">+91 95927 38038</a></span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span><a href="mailto:dipanchhabra@gmail.com">dipanchhabra@gmail.com</a></span>
                </div>
                <div className="itemContainer">
                    <LinkedIn className="icon"/>
                    <span><a href="https://www.linkedin.com/in/dipan-chhabra-454520164" target="_blank" rel="noreferrer noopener">Dipan Chhabra</a></span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon"/>
                    <span><a href="https://github.com/dipanc1/" target="_blank" rel="noreferrer noopener">dipanc1</a></span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            </div>
        </div>
    )
}
