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
            <div>Current Series</div>
            <div className="container comics-raw">
                <ComicsList comics={comicsList} />
            </div>
            <div>
                <button>Load More</button>
            </div>
        </main>);
}