import SingleItem from './SingleItem';

const ItemList = ({title, items, link, idLink, itemsArray}) => {
    return <div className="item-list">
    <div className="item-list__header">
      <h2>{title}s populares</h2>
      <a className="item-list__link" href={link}>
        Mostrar tudo
      </a>
    </div>
    <div className="item-list__container">
    {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currObj, index) => (<SingleItem info={currObj} idLink={idLink} key={`${title}-${index}`} />))}
    </div>
  </div>
}
export default ItemList;
