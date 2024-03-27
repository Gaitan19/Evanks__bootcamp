import { useState } from 'react';
import { FaCircle, FaShoppingCart } from 'react-icons/fa';
import { v4 } from 'uuid';
import Button from '../Button';
import { descriptionsList } from '@/constants/food';

const FoodDetailsRight = () => {
  const total = 55.0;
  const discounted = 45.0;

  const [quantity, setQuantity] = useState(0);

  const handleDeleteQuantity = () =>
    quantity > 0 && setQuantity((prevQuantity) => prevQuantity - 1);

  const renderDescriptionsList = () =>
    descriptionsList.map((description) => (
      <li className="Food-details-description-text" key={v4()}>
        <FaCircle className="Food-details-circle" />
        {description}
      </li>
    ));

  return (
    <div className="Food-details-right">
      <div className="Food-details-item Food-details-standar">
        <h3 className="Food-details-title">Standar Food</h3>
        <div className="Food-details-price">
          <span className="Food-details-title Price">Price</span>
          <div>
            <span className="Total">${total}</span>
            <span className="Discounted">${discounted}</span>
          </div>
        </div>
        <div className="Food-details-quantity">
          <span>Quantity</span>
          <div className="Food-details-button-set">
            <Button
              customClass="Food-details-counter"
              buttonText="+"
              onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            />
            <span className="Counter">{quantity}</span>
            <Button
              customClass="Food-details-counter"
              buttonText="-"
              onClick={handleDeleteQuantity}
            />
          </div>

          <Button customClass="Food-details-button-add">
            <span className="Button-fill-text Food-details-add">
              <FaShoppingCart className="Shopping" />
              Add To Cart
            </span>
          </Button>
        </div>
      </div>

      <div className="Food-details-item">
        <h3 className="Food-details-title">Included</h3>
        <ul className="Food-details-included">{renderDescriptionsList()}</ul>
      </div>
    </div>
  );
};

export default FoodDetailsRight;
