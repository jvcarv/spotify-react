import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const SingleItem = ({info, idLink}) => {
    return (
        <a href={`${idLink}/${info.id}`} className="single-item">
        <div className="single-item__div-image-button ">
          <div className="single-item__div-image">
            <img
              className="single-item__image"
              src={info.image}
              alt="imagem do artista"
            />
          </div>
          <FontAwesomeIcon
            className="single-item__icon"
            icon={faCirclePlay}
          />
        </div>
        <div className="single-item__texts">
          <p className="single-item__title">{info.name}</p>
          <p className="single-item__type">{info.artist ??"Artista"}</p> {/* É O NULLISH COALESCING, esquivale a artist === undefined? artist : "Artista" */}
        </div>
      </a>
    );
}

export default SingleItem;