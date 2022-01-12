import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './portfolioList.scss'

export default function PortfolioList({ id, title, active, setSelected }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <li key={id} className={active ? "portfolioList active" : "portfolioList"} style={
            {
                backgroundColor: (darkMode && active) && 'white',
                color: (darkMode && active) && '#15023a',
            }
        } onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
