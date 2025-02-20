import ItemList from './ItemList';
import artistsArray from '../assets/database/artists';
import songsArray from '../assets/database/songs';
const Main = ({type}) => {

  return (
    <div className="main">

      {
      type === 'artists'?<ItemList title="Artista" link="/artists" idLink="/artist" items={10} itemsArray={artistsArray}/>
      : type === 'songs'? <ItemList title="Música" link="/songs" idLink="/song" items={20} itemsArray={songsArray}/>
      :
        <>
          <ItemList title="Artista" link="/artists" idLink="/artist" items={10} itemsArray={artistsArray}/>
          <ItemList title="Música" link="/songs" idLink="/song" items={20} itemsArray={songsArray}/>
        </>
      }
    </div>
  );
};

export default Main;
