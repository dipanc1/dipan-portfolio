import { useContext, useState } from 'react'
import { ThemeContext } from '../../context';
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            title: "Nextjs Shopping App",
            desc: "Login to the app as Admin and add new products to the store. You can also edit and delete products. As a user you can add products to the cart and checkout.",
            img:
                "https://res.cloudinary.com/dipanc1/image/upload/v1645081130/portfolio2/Screenshot_282_plshuh.jpg",
            icon: "https://img.icons8.com/ios/50/000000/project-management.png"
        },
        {
            id: 2,
            title: "React Google App",
            desc: "Show search results from Google API, You can search for videos, images, videos and all. You can also save your search history.",
            img:
            "https://res.cloudinary.com/dipanc1/image/upload/v1645081128/portfolio2/Screenshot_277_wq7oac.jpg",
            icon: "https://img.icons8.com/ios/50/000000/project-management.png"
        },
        {
            id: 3,
            title: "React News App",
            desc: "Show top news from the world. Also many more categories to choose from. Fetching data from the GNews API.",
            img:
            "https://res.cloudinary.com/dipanc1/image/upload/v1645081128/portfolio2/Screenshot_275_lylmdt.jpg",
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
