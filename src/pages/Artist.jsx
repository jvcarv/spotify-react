import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import artistsArray from '../assets/database/artists';
import songsArray from '../assets/database/songs';

const Artist = () => {
    // let artist = artistsArray[useParams().id-1];
    let { id } = useParams()
    let artist = artistsArray.filter((currentArtistObj, index) => currentArtistObj._id === id)[0];
    const songs = songsArray.filter((currentSongObj, index) => currentSongObj.artist === artist.name);

    let random = Math.ceil(Math.random() * (songs.length - 1)); 

    return (
        <div className="artist">
            <div className="artist__header" style={{
                backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artist.banner})`
            }}>
            <h2 className="artist__title">{artist.name}</h2>
            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongList songs={songs}/>
            </div>
            <Link to={`/song/${songs[random].id}`}>
                <FontAwesomeIcon
                className="single-item__icon single-item__icon--artist"
                icon={faCirclePlay}
                />
            </Link>
        </div>
    );
}

export default Artist;