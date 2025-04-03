// importazione componenti footer
import FooterNavbar from "./footer-components/Footer-navbar.jsx";
import FooterInfo from "./footer-components/Footer-info.jsx";
import FooterSocials from './footer-components/Footer-socials.jsx'

// Funzione Footer

export default function Footer() {
    return (
        <footer>
            <FooterNavbar />
            <FooterInfo />
            <FooterSocials />
        </footer>
    );
}