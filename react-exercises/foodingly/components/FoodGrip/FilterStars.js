import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { v4 } from 'uuid';
import FoodLeftItem from './FoodLeftItem';

const FilterStars = (props) => {
  const { title, isByType, filterTypes } = props;

  const renderStar = (marks) => {
    return [...Array(5).keys()].map((index) => {
      const isGreen = index >= marks;

      return (
        <li key={v4()}>
          <FaStar className={`Food-star ${isGreen && 'Food-star-green'}`} />
        </li>
      );
    });
  };

  const renderReviews = () =>
    filterTypes.map((filterType) => (
      <div className="Food-container-stars" key={filterType.id}>
        <input type="checkbox" className="Food-checkbox" />
        {isByType ? (
          <div className="Food-types">
            <span className="Food-types-text">{filterType.text}</span>
            <span className="Food-types-text">{filterType.counter}</span>
          </div>
        ) : (
          <ul className="Food-stars">{renderStar(filterType)}</ul>
        )}
      </div>
    ));
  return <FoodLeftItem title={title}>{renderReviews()}</FoodLeftItem>;
};

FilterStars.propTypes = {
  title: PropTypes.string.isRequired,
  isByType: PropTypes.bool,
  filterTypes: PropTypes.array,
};

FilterStars.defaultProps = {
  isByType: false,
  filterTypes: [...Array(5).keys()],
};

export default FilterStars;
