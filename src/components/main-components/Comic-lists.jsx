// importazione Comic Card
import ComicCard from "./Comic-card";

export default function ComicsList({ comics }) {

    return (
        <div className="container comics-raw">
            {comics.map(comic => <ComicCard key={comic.id} comic={comic} />)};
        </div>
    );
}