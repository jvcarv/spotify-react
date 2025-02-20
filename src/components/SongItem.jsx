import { Link } from "react-router-dom";

const SongItem = ({index, song}) => {
    return (
        <Link to={`/song/${song._id}`} className="song-item">
        <div className="song-item__number-album">
            <p>{index}</p>

            <div className="song-item__album">
                <img className="song-item__image" src={song.image}
                alt={song.name}/>

                <p className="song-item__name">{song.name}</p>
            </div>
        </div>
            <p>{song.duration}</p>
        </Link>
    );
}

export default SongItem;