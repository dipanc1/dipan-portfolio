import './topbar.scss'
import { Person, Mail, LinkedIn, GitHub, Work, FileCopy } from "@material-ui/icons"
import Toggle from '../toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

export default function Topbar({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={"topbar " + (menuOpen && "active")} style={{ backgroundColor: menuOpen || darkMode ? '#15023a' : 'white', color: (menuOpen || darkMode) && 'white' }}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Dipan's Portfolio.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span><a href="tel:+919592738038">+91 95927 38038</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span><a href="mailto:dipanchhabra@gmail.com">dipanchhabra@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <span><a href="https://www.linkedin.com/in/dipan-chhabra-454520164" target="_blank" rel="noreferrer noopener">Dipan Chhabra</a></span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span><a href="https://github.com/dipanc1/" target="_blank" rel="noreferrer noopener">dipanc1</a></span>
                    </div>
                    <div className="itemContainer">
                        <FileCopy className="icon" />
                        <span><a href="https://drive.google.com/file/d/1PeTWaZ1lOqXshRXGvN0YGEV94kIwzG35/view?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a></span>
                    </div>
                    <div className="itemContainer1">
                        <Work className="icon1" />
                        <span><a href="https://www.freelancer.com/u/dipanc1" target="_blank" rel="noreferrer noopener">Hire Me</a></span>
                    </div>
                    <div className="itemContainerToggle">
                        <Toggle />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span style={{ backgroundColor: menuOpen || darkMode ? 'white' : "#15023a" }} className="line1"></span>
                        <span style={{ backgroundColor: menuOpen || darkMode ? 'white' : "#15023a" }} className="line2"></span>
                        <span style={{ backgroundColor: menuOpen || darkMode ? 'white' : "#15023a" }} className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
