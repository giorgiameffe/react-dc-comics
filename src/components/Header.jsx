// importazione logo
import logo from '../assets/img/dc-logo.png';

// Funzione Header 

export default function Header() {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="Logo-dc" />
                </div>
                <ul className='menu-list'>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Games</li>
                    <li>Collectibles</li>
                    <li>Videos</li>
                    <li>Fans</li>
                    <li>News</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </header>
    );
}

