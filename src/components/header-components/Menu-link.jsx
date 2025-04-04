import menuLinks from '../Header.jsx'
// Funzione per i link del Menu

export default function MenuLink(props) {
    return (
        <li><a href="#">{props.title}</a></li>
    );
}