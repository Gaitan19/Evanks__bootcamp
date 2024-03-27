import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '@/hooks/useLocalStorage';

const foodinglyContext = createContext();

const FoodinglyContext = (props) => {
  const { children } = props;
  const [visibleCart, setVisibleCart] = useState(false);
  const [productsCart, setProductsCart] = useLocalStorage('productsCart', []);

  const addProductCart = (product) => {
    const newCartProduct = { ...product, quantity: 1 };

    setProductsCart([...productsCart, newCartProduct]);
  };

  const deleteProductCart = (product) => {
    const filterProducts = productsCart.filter(
      (productCart) => productCart.name !== product.name,
    );

    setProductsCart(filterProducts);
  };

  const handleProductQuantity = (id, value) => {
    const tempProducts = [...productsCart];
    const productIndex = tempProducts.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      tempProducts[productIndex].quantity = value;
      setProductsCart(tempProducts);
    }
  };

  const getTotalPrice = () =>
    productsCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );

  return (
    <foodinglyContext.Provider
      value={{
        visibleCart,
        setVisibleCart,
        productsCart,
        addProductCart,
        deleteProductCart,
        handleProductQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </foodinglyContext.Provider>
  );
};

FoodinglyContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FoodinglyContext, foodinglyContext };
