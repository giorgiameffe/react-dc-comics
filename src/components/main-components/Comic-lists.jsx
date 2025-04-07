// importazione Comic Card
import ComicCard from "./Comic-card";

export default function ComicsList(props) {

    return (

        { comics.map(comic => <ComicCard key={comic.id} />) }

    );
}