import PropTypes from 'prop-types';

const FoodLeftItem = (props) => {
  const { children, customClass, title } = props;

  return (
    <div className={`Food-item ${customClass}`}>
      <h2 className="Food-item-title"> {title}</h2>
      {children}
    </div>
  );
};

FoodLeftItem.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FoodLeftItem.defaultProps = {
  children: <></>,
  customClass: '',
};

export default FoodLeftItem;
