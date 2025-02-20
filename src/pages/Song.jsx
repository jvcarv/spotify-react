import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import songsArray from '../assets/database/songs';
import artistsArray from '../assets/database/artists';
import artistArray from "../assets/database/artists";
const Song = () => {
    const { id } = useParams();

    const song = songsArray.filter((currentSongObj, index) => currentSongObj._id === id)[0];

    const artist = artistArray.filter(currentArtistObj => currentArtistObj.name === song.artist)[0];
    const songs = songsArray.filter((currentSongObj, index) => currentSongObj.artist === artist.name);
    return (
        <div className="song">
            <div className="song__container"> 
                <div className="song__image-container">
                    <img className="song__image" src={song.image} alt=""/>
                </div>
            </div>
            <div className="song__bar"> 
                <Link to={`/artist/${artist.id}`} className="song__artist-image">
                    <img width={75} height={75} src={artist.image} alt=""/>
                </Link>

                <Player song={song} songs={songs}/>

                <div>
                    <p className="song__name">{song.name}</p>
                    <p>{song.artist}</p>
                </div>
            </div>
        </div>
    );
}

export default Song;