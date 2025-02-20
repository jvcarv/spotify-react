import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({title, items, link, idLink, itemsArray}) => {
    const pathname = useLocation().pathname;

    const isHome = pathname === "/";
    let finalItems = isHome ? items : Infinity;
    
    return <div className="item-list">
    <div className="item-list__header">
      <h2>{title}s populares</h2>
      {isHome ? <Link className="item-list__link" to={link}>Mostrar tudo</Link> : <></>}
      
    </div>
    <div className="item-list__container">
    {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (<SingleItem info={currObj} idLink={idLink} key={`${title}-${index}`} />))}
    </div>
  </div>
}
export default ItemList;
