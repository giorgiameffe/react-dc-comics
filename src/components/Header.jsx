// importazione componenti Logo e Menu
import Logo from './header-components/Logo.jsx';
import Menu from './header-components/Menu.jsx';

// Funzione Header 

export default function Header() {
    return (
        <header>
            <nav className='container'>
                <Logo />
                <Menu />
            </nav>
        </header>
    );
}

