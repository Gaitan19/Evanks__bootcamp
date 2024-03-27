import Proptypes from 'prop-types';
import Image from 'next/image';

const ReservationCard = (props) => {
  const { offer } = props;

  const { title, image, text, icon } = offer;

  return (
    <article className="Reservation-card">
      <div
        className="Reservation-card-icon"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <h3 className="Reservation-card-title">{title}</h3>
      <p className="Reservation-card-text">{text}</p>
      <Image
        alt="image card"
        width={100}
        height={100}
        src={image}
        className="Reservation-card-image"
        priority
      />
    </article>
  );
};

ReservationCard.propTypes = {
  offer: Proptypes.shape({
    title: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
    icon: Proptypes.string.isRequired,
  }).isRequired,
};

export default ReservationCard;
