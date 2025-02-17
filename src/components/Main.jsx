import ItemList from './ItemList';
import artistsArray from '../assets/database/artists';
import songsArray from '../assets/database/songs';
const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artista" link="/artists" idLink="/artist" items={5} itemsArray={artistsArray}/>

      <ItemList title="Música" link="/songs" idLink="/song" items={10} itemsArray={songsArray}/>
    </div>
  );
};

export default Main;
