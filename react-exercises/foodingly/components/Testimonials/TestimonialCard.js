import Proptypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { v4 } from 'uuid';
import { formatDate } from '@/utils/FormatDate';

const TestimonialCard = (props) => {
  const { person } = props;
  const { image, name, date, text } = person;

  const renderStar = () => {
    return [...Array(5).keys()].map(() => {
      return (
        <li key={v4()} className="Testimonials-card-icon">
          <FaStar />
        </li>
      );
    });
  };

  return (
    <article className="Testimonials-card">
      <div className="Testimonials-card-header">
        <p className="Testimonials-card-date">{formatDate(date)}</p>
        <div className="Testimonials-card-rating">
          <p className="Testimonials-card-excellent">Excellent</p>
          <ul className="Testimonials-card-stars">{renderStar()}</ul>
        </div>
      </div>
      <div className="Testimonials-card-body">
        <div
          className="Testimonials-card-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h3 className="Testimonials-card-name">{name}</h3>
        <p className="Testimonials-card-text">“{text}”</p>
      </div>
    </article>
  );
};

TestimonialCard.propTypes = {
  person: Proptypes.shape({
    image: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    date: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;
