import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import Button from '../Button';
import { foodinglyContext } from '../../context/FoodinglyContext';

const ShopCart = (props) => {
  const { visible, setVisible } = props;
  const { productsCart, deleteProductCart, getTotalPrice } =
    useContext(foodinglyContext);

  const renderCartProducts = () => {
    return productsCart.map((cartProduct) => {
      return (
        <li className="Cart-product" key={cartProduct.id}>
          <Image
            width={100}
            height={100}
            priority
            alt="cart product"
            src={cartProduct.image}
            className="Cart-image"
          />
          <div className="Cart-product-info">
            <span className="Cart-name">{cartProduct.name}</span>
            <span className="Cart-product-price">{`${cartProduct.quantity} x $${cartProduct.price}`}</span>
          </div>
          <Button
            customClass="Cart-delete"
            onClick={() => deleteProductCart(cartProduct)}
          >
            <FaTrashAlt />
          </Button>
        </li>
      );
    });
  };

  return (
    <COffcanvas
      placement="end"
      visible={visible}
      onHide={() => setVisible(false)}
      className="Cart"
    >
      <COffcanvasHeader>
        <COffcanvasTitle className="Cart-title">{`MY CART (${productsCart.length})`}</COffcanvasTitle>
        <CCloseButton
          className="text-reset"
          onClick={() => setVisible(false)}
        />
      </COffcanvasHeader>
      <COffcanvasBody>
        <div className="Cart-container">
          <ul className="Cart-products">{renderCartProducts()}</ul>
          <div className="Cart-product">
            <div className="Cart-total">
              <span className="Cart-total-text">subtotal</span>
              <span className="Cart-total-text">{`$ ${getTotalPrice()}`}</span>
            </div>
          </div>
          <Button type="button" customClass="Button-fill Button-checkout">
            <span className="Button-fill-text">Checkout</span>
          </Button>
        </div>
      </COffcanvasBody>
    </COffcanvas>
  );
};

ShopCart.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default ShopCart;
