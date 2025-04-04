// importazione link Menu
import MenuLinks from "./Menu-link";

// Funzione Menu

export default function Menu() {

    const menuLinks = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop'];
    console.log(menuLinks)

    return (
        <ul className='menu-list'>
            <MenuLinks link={menuLinks[0]} />
            <MenuLinks link={menuLinks[1]} />
            <MenuLinks link={menuLinks[2]} />
            <MenuLinks link={menuLinks[3]} />
            <MenuLinks link={menuLinks[4]} />
            <MenuLinks link={menuLinks[5]} />
            <MenuLinks link={menuLinks[6]} />
            <MenuLinks link={menuLinks[7]} />
            <MenuLinks link={menuLinks[8]} />
            <MenuLinks link={menuLinks[9]} />
        </ul>
    )
}