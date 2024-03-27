import PropTypes from 'prop-types';

const ContactCard = (props) => {
  const { title, city, text } = props;
  return (
    <article className="Contact-card">
      <p className="Contact-card-title">{title}</p>
      <h2 className="Contact-card-city">{city}</h2>
      <p className="Contact-card-text">{text}</p>
      <p className="Contact-card-view">View on map</p>
    </article>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactCard;
