// importazione lista di comics
import comicsList from '../data/comics.js';

import Jumbotron from './main-components/Jumbotron.jsx';

import ComicCard from './main-components/Comic-card.jsx';

// Funzione Main

export default function Main() {

    return (
        <main>
            <Jumbotron />
            <div className="container">
                <ComicCard comics={comicsList} />
            </div>
        </main>);
}