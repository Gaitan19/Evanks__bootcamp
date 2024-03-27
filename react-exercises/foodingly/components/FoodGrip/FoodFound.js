import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { foodPopularItems, foodReservation } from '@/constants/food';
import FilterPrice from './FilterPrice';
import FilterStars from './FilterStars';
import Product from '../Home/Product';
import { foodinglyContext } from '../../context/FoodinglyContext';
import { products } from '@/constants/ProductList';

const FoodFound = () => {
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
    <div className="Food">
      <div className="Food-content">
        <h2 className="Food-title">Foods found</h2>
        <div className="Food-container">
          <div className="Food-container-left">
            <FilterPrice />
            <FilterStars title="Filter by Review" />
            <FilterStars
              title="Reservation"
              isByType
              filterTypes={foodReservation}
            />
            <FilterStars
              title="Popular Items"
              isByType
              filterTypes={foodPopularItems}
            />
          </div>
          <div className="Food-container-right">
            <div className="Products-list Food-products">
              {renderProducts()}
            </div>
            <Pagination className="Authors-pagination" count={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodFound;
