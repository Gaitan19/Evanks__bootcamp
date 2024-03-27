import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import { toggleFavorite, deleteFavorite } from '@/redux/actions';

const Card = (props) => {
  const {
    customClass,
    imageClass,
    image,
    descriptionImage,
    children,
    text,
    href,
    pokemon,
    type,
    isFavoriteItem,
  } = props;

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFavoriteItem) {
      dispatch(deleteFavorite(pokemon, type));
    } else {
      dispatch(toggleFavorite(pokemon, type));
    }
  };

  return (
    <div className={customClass}>
      <Image
        className={imageClass}
        width={200}
        height={200}
        src={image}
        alt={descriptionImage}
        priority
      />

      <div className={`${customClass}-footer`}>
        <Button
          customClass={`Button-favorites ${isFavoriteItem && 'Card-favorite'}`}
          onClick={handleFavorite}
        >
          <FaStar className={`${isFavoriteItem && 'Card-favorite'}`} />
        </Button>
        <Link href={href} className={`List-text ${customClass}-text`}>
          {text}
        </Link>
      </div>
      {children}
    </div>
  );
};

Card.propTypes = {
  customClass: PropTypes.string,
  imageClass: PropTypes.string,
  image: PropTypes.string.isRequired,
  descriptionImage: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  pokemon: PropTypes.object,
  type: PropTypes.string,
  isFavoriteItem: PropTypes.bool,
};

Card.defaultProps = {
  customClass: '',
  imageClass: '',
  descriptionImage: '',
  children: <></>,
  text: '',
  pokemon: {},
  isFavoriteItem: false,
};

export default Card;
