import PropTypes from 'prop-types';
import { useContext } from 'react';
import { v4 } from 'uuid';
import { foodinglyContext } from '@/context/FoodinglyContext';

const CheckoutOrder = (props) => {
  const { title, children, customClass } = props;

  const { productsCart, getTotalPrice } = useContext(foodinglyContext);

  const getTotalFood = (quantity, price) => quantity * price;

  const renderOrders = () =>
    productsCart.map((product) => (
      <div key={v4()} className="Checkout-orders">
        <span>{`${product.name} x ${product.quantity}`}</span>
        <span>{`$${getTotalFood(product.quantity, product.price)}`}</span>
      </div>
    ));

  return (
    <div className={`Checkout-box ${customClass}`}>
      <h3 className="Checkout-title Checkout-box-title">{title}</h3>
      {children}
      <div className="Checkout-container-orders">{renderOrders()}</div>
      <div className="Checkout-orders">
        <span>Total Amount</span>
        <span>${getTotalPrice()}</span>
      </div>
    </div>
  );
};

CheckoutOrder.propTypes = {
  title: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.node,
};

CheckoutOrder.defaultProps = {
  children: <></>,
  customClass: '',
};

export default CheckoutOrder;
