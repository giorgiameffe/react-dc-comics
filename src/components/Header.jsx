// Logo
import logo from '../assets/img/dc-logo.png';

// Funzione Header 

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo-dc" />
            <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>Tv</li>
                <li>Games</li>
                <li>Collectibles</li>
                <li>Videos</li>
                <li>News</li>
                <li>Shop</li>
            </ul>
        </header>
    );
}

