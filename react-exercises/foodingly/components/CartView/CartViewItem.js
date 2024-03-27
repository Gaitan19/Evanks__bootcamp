import PropTypes from 'prop-types';
import Button from '../Button';

const CartViewItem = (props) => {
  const { title, children, buttonText } = props;

  return (
    <div className="View-container-item">
      <div className="View-item">
        <h3 className="Food-details-title">{title}</h3>
        {children}
        <Button type="button" customClass="Button-fill Button-view">
          <span className="Button-fill-text Button-view-text">
            {buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
};

CartViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  buttonText: PropTypes.string.isRequired,
};

CartViewItem.defaultProps = {
  children: <></>,
};

export default CartViewItem;
