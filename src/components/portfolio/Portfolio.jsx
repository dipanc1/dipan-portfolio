import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList.jsx';
import './portfolio.scss'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
} from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "website",
            title: "Design & Stuff",
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "website":
                setData(designPortfolio)
                break;
            default:
                setData(featuredPortfolio)
        }
    }, [selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="app" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
