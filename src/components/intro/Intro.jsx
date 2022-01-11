import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    console.log(textRef)
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 25,
            strings: ['Reactjs', 'Angular', 'ASP.NET', 'Basically Web Development']
        })

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Howdy Dowdy, I'm</h2>
                    <h1>Dipan Chhabra</h1>
                    <h3>Learning <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
