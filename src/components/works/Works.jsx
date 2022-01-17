import { useContext, useState } from 'react'
import { ThemeContext } from '../../context';
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            title: "Fetching News from NewsAPI",
            desc: "Fetching Data Using News API, and showing it Dynamically on Bootstrap Web Application, Parsing JSON Data In HTML",
            img:
                "https://res.cloudinary.com/dipanc1/image/upload/v1641960022/portfolio/img4_pnlsbw.png",
            icon: "https://img.icons8.com/ios/50/000000/project-management.png"
        },
        {
            id: 2,
            title: "Blog Website Using Pure HTML, CSS & JavaScript",
            desc: "Resposive Blog Website Without Backend But Can Be Added.",
            img:
            "https://res.cloudinary.com/dipanc1/image/upload/v1641959995/portfolio/img1_t8bzvh.png",
            icon: "https://img.icons8.com/ios/50/000000/project-management.png"
        },
        {
            id: 3,
            title: "Chat App Using BootStrap, Nodejs And SocketIO.",
            desc: "Made It Using Nodejs In Server, JavaScript and Bootstrap In FrontEnd and Hosted It on Digital Ocean Using Apache Server",
            img:
            "https://res.cloudinary.com/dipanc1/image/upload/v1641960008/portfolio/img2_jdrfmm.png",
            icon: "https://img.icons8.com/ios/50/000000/project-management.png"
        },
    ];
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works" id="works" style={{ backgroundColor: darkMode ? '#59b256' : 'crimson' , color: darkMode && 'inherit' }}>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div key={d.id} className="container">
                        <div className="items">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>

                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick("right")} />
        </div>
    )
}
