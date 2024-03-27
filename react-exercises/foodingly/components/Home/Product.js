import PropTypes from 'prop-types';
import { useContext } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { foodinglyContext } from '../../context/FoodinglyContext';

const Product = (props) => {
  const { product, isCartProduct } = props;
  const { id, name, image, discount, price, rating, reviews } = product;
  const { addProductCart, deleteProductCart } = useContext(foodinglyContext);

  const showDiscount = () => {
    if (discount)
      return <div className="Products-card-discount">{discount}%</div>;

    return <></>;
  };

  const handleAdd = () => {
    if (isCartProduct) {
      deleteProductCart(product);
    } else {
      addProductCart(product);
    }
  };

  return (
    <article className="Products-card">
      <div className="Products-card-header">
        <Image
          className="Products-card-image"
          width={100}
          height={100}
          alt="item product"
          priority
          src={image}
        />
        {showDiscount()}
      </div>
      <div className="Products-card-body">
        <span className="Products-card-name">{name}</span>
        <div className="Products-card-info">
          <span className="Products-card-rating">{rating}</span>
          <span className="Products-card-review">{`(${reviews} reviews)`}</span>
        </div>
      </div>
      <div className="Products-card-add">
        <span className="Products-card-price">${price}</span>
        <Button customClass="Button-fill Button-add" onClick={handleAdd}>
          <span>{isCartProduct ? 'Delete From Cart' : 'Add To Cart'}</span>
        </Button>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
  isCartProduct: PropTypes.bool.isRequired,
};

export default Product;
