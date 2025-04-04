// importazione immagini
import comicsDigital from '../../assets/img/buy-comics-digital-comics.png';
import merchandise from '../../assets/img/buy-comics-merchandise.png';
import shopLocator from '../../assets/img/buy-comics-shop-locator.png';
import subscription from '../../assets/img/buy-comics-subscriptions.png';
import powerVisa from '../../assets/img/buy-dc-power-visa.svg';



// Funzione Footer Navbar

export default function FooterNavbar() {

    return (
        <nav className='nav-element'>
            <div className='container'>
                <ul className="f-navbar">
                    <li>
                        <img className='f-images' src={comicsDigital} alt="Digital Comics Icon" />
                        <div className='navbar-text'>Digital Comics</div>
                    </li>
                    <li>
                        <img className='f-images' src={merchandise} alt="Merchandise Icon" />
                        <div className='navbar-text'>Dc Merchandise</div>
                    </li>
                    <li>
                        <img className='f-images' src={subscription} alt="Subscription Icon" />
                        <div className='navbar-text'>Subscription</div>
                    </li>
                    <li>
                        <img className='f-images' src={shopLocator} alt="Shop Locator Icon" />
                        <div className='navbar-text'>Comic Shop Locator</div>
                    </li>
                    <li>
                        <img className='f-images' src={powerVisa} alt="Power Visa Icon" />
                        <div className='navbar-text'>Dc Power Visa</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}