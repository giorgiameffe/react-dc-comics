// importazione componenti Logo e Menu
import Logo from './header-components/Logo.jsx';
import Menu from './header-components/Menu.jsx';

// Array di link
const menuLinks = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop'];

// Funzione Header 

export default function Header() {

    return (
        <header>
            <nav className='container'>
                <Logo />
                <Menu link={menuLinks} />
            </nav>
        </header>
    );
}

