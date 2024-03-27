import { useState, useContext, useEffect } from 'react';
import { v4 } from 'uuid';
import Button from '../Button';
import Product from './Product';
import { products, productOptions } from '@/constants/ProductList';
import { foodinglyContext } from '../../context/FoodinglyContext';
import TextButton from './TextButton';

const PopularItems = () => {
  const [selectedCategory, setSelectedCategory] = useState(productOptions[0]);
  const [productsFavorites, setProductsFavorites] = useState(products);
  const { productsCart } = useContext(foodinglyContext);

  useEffect(() => {
    const filteredProducts =
      selectedCategory === productOptions[0]
        ? products
        : products.filter((product) => product.category === selectedCategory);

    setProductsFavorites(() => filteredProducts);
  }, [selectedCategory]);

  const renderProductOptions = () =>
    productOptions.map((productOption) => (
      <Button
        key={v4()}
        customClass={`Button-products ${
          selectedCategory === productOption ? 'Button-products-active' : ''
        }`}
        onClick={() => setSelectedCategory(() => productOption)}
        buttonText={productOption}
      />
    ));

  const renderProducts = () => {
    return productsFavorites.map((product) => {
      const isCartproduct =
        productsCart.some((productCart) => productCart.name === product.name) ||
        false;

      return (
        <Product
          product={product}
          key={product.id}
          isCartProduct={isCartproduct}
        />
      );
    });
  };

  return (
    <TextButton
      title="Our Featured Items"
      text="Our most popular items"
      customClass="Products"
    >
      <div className="Products-filters">{renderProductOptions()}</div>
      <div className="Products-list">{renderProducts()}</div>
    </TextButton>
  );
};

export default PopularItems;
