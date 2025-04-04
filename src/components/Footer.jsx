// importazione componenti footer
import FooterNavbar from "./footer-components/Footer-navbar.jsx";
import FooterInfo from "./footer-components/Footer-info.jsx";
import FooterSocials from './footer-components/Footer-socials.jsx';

// creazione array di link 
// DC Comics
const dcComicsList = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'];
// Shop
const shopList = ['Shop DC', 'Shop DC Collectibles'];
// Dc
const dcList = ['Terms of Use', 'Privacy Policy (New)', 'Ad Choises', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSP Certificates', 'Ratings', 'Shop Hep', 'Contact Us'];
// Sites
const sitesList = ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa'];
// Funzione Footer

export default function Footer() {

    return (

        <footer>
            <FooterNavbar />
            <FooterInfo comics={dcComicsList} shop={shopList} dc={dcList} sites={sitesList} />
            <FooterSocials />
        </footer>
    );
}