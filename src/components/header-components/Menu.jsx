// importazione link Menu
import MenuLink from "./Menu-link.jsx";
import menuLinks from '../Header.jsx';
import Header from '../Header.jsx';

// Funzione Menu

export default function Menu(props) {

    return (
        <ul className='menu-list'>
            <MenuLink title={props.link[0]} />
            <MenuLink title={props.link[1]} />
            <MenuLink title={props.link[2]} />
            <MenuLink title={props.link[3]} />
            <MenuLink title={props.link[4]} />
            <MenuLink title={props.link[5]} />
            <MenuLink title={props.link[6]} />
            <MenuLink title={props.link[7]} />
            <MenuLink title={props.link[8]} />
            <MenuLink title={props.link[9]} />
        </ul>
    )
}