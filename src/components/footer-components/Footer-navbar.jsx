// importazione immagini
import ComicsDigital from '../../assets/img/buy-comics-digital-comics.png';
import Merchandise from '../../assets/img/buy-comics-merchandise.png';
import ShopLocator from '../../assets/img/buy-comics-shop-locator.png';
import Subscription from '../../assets/img/buy-comics-subscriptions.png';
import PowerVisa from '../../assets/img/buy-dc-power-visa.svg';



// Funzione Footer Navbar

export default function FooterNavbar() {
    return (
        <nav className='nav-element'>
            <ul className="f-navbar">
                <li>
                    <img className='f-images' src={ComicsDigital} alt="Digital Comics Icon" />
                    <div className='navbar-text'>Digital Comics</div>
                </li>
                <li>
                    <img className='f-images' src={Merchandise} alt="Merchandise Icon" />
                    <div className='navbar-text'>Dc Merchandise</div>
                </li>
                <li>
                    <img className='f-images' src={Subscription} alt="Subscription Icon" />
                    <div className='navbar-text'>Subscription</div>
                </li>
                <li>
                    <img className='f-images' src={ShopLocator} alt="Shop Locator Icon" />
                    <div className='navbar-text'>Comic Shop Locator</div>
                </li>
                <li>
                    <img className='f-images' src={PowerVisa} alt="Power Visa Icon" />
                    <div className='navbar-text'>Dc Power Visa</div>
                </li>
            </ul>
        </nav>
    );
}