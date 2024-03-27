import { useContext } from 'react';
import { products } from '@/constants/ProductList';
import { foodinglyContext } from '@/context/FoodinglyContext';
import Product from '../Home/Product';
import MultiCarousel from '../MultiCarousel';
import { responsiveCarousel } from '@/constants/responsiveCarousel';

const FoodLike = () => {
  const { productsCart } = useContext(foodinglyContext);

  const renderProducts = () => {
    return products.map((product) => {
      const isCartproduct =
        productsCart.some((productCart) => productCart.id === product.id) ||
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
    <div className="Food-details Food-like">
      <div className="Food-details-content">
        <h3 className="Food-like-title">You May Also Like</h3>

        <MultiCarousel
          customClass="Testimonials-carousel"
          responsive={responsiveCarousel}
        >
          {renderProducts()}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default FoodLike;
