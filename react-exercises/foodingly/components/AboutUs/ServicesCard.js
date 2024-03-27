import Image from 'next/image';
import PropTypes from 'prop-types';

const ServicesCard = (props) => {
  const { service } = props;
  const { image, title, text } = service;

  return (
    <div className="Services-card">
      <Image
        width={57}
        height={58}
        alt="service"
        priority
        className="Services-image"
        src={image}
      />
      <h2 className="Services-title">{title}</h2>
      <p className="Services-text">{text}</p>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesCard;
