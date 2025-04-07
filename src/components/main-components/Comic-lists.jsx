// importazione Comic Card
import ComicCard from "./Comic-card";

export default function ComicsList({ comics }) {

    return comics.map(comic => <ComicCard key={comic.id} comic={comic} />);
}