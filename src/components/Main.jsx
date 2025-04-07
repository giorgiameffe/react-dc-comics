// importazione lista di comics
import comicsList from '../data/comics.js';
// importazione Jumbotron
import Jumbotron from './main-components/Jumbotron.jsx';
// importazione componente lista di comics
import ComicsList from './main-components/Comic-lists.jsx'

// Funzione Main

export default function Main() {

    return (
        <main>
            <Jumbotron />
            <div className='current-label'>Current Series</div>
            <ComicsList comics={comicsList} />
            <div className='load-button'>
                <button>Load More</button>
            </div>
        </main>);
}