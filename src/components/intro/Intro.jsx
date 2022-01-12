import './intro.scss';
import { init } from 'ityped';
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from '../../context';

export default function Intro() {
    const textRef = useRef();

    // console.log(textRef);
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 25,
            strings: ['UI/UX', 'Reactjs', 'Nodejs', 'ASP.NET', 'MongoDB', 'MS SQL', 'Web APIs', 'Basically Web Development']
        })

    }, []);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro" id="intro" style={{ backgroundColor: darkMode ? '#15023a' : 'white', color: darkMode && 'white' }}>
            <div className="left">
                <div className="imgContainer" style={{ backgroundColor: darkMode && '#59b256' }}>
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Howdy Dowdy, I'm</h2>
                    <h1>Dipan Chhabra</h1>
                    <h3>Expert in <span style={{ color: darkMode && '#59b256' }} ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
