import SongItem from "./SongItem";
import { useState } from "react";
const SongList = ({songs}) => {
    const [limit, setLimit] = useState(5);

    return (
        <div className="song-list">
            {songs.filter((currentSongObj, index) => index < limit)
                .map((currentSongObj, index) => {
                return <SongItem key={index} song={currentSongObj} index={index + 1} />
            })}

            {limit < songs.length?
                <p className="song-list__see-more" onClick={() => (setLimit(limit + 5))}>Ver mais</p>
                :  <p className="song-list__see-more" onClick={() => (setLimit(limit - 5))}>Ver menos</p>
            }
        </div>
    );
}

export default SongList;