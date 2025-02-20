import artistsArray from '../database/artists.js';
import songsArray from '../database/songs.js';
import {db} from './connect.js';


const newArtistArray = artistsArray.map((artist) => {
    const newArtist = {
        ...artist
    };

    delete newArtist.id;

    return newArtist
});

const newSongsArray = songsArray.map((songs) => {
    const newSongs = {
        ...songs
    };

    delete newSongs.id;

    return newSongs
});

const artistsResponse = await db.collection("artists").insertMany(newArtistArray);
const songsResponse = await db.collection("songs").insertMany(newSongsArray);

console.log(artistsResponse);
console.log(songsResponse);