import { useState } from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import { foodPictures } from '@/constants/food';
import Button from '../Button';

const FoodPictures = () => {
  const [selectedPicture, setSelectedPicture] = useState(foodPictures[0]);

  const renderFoodPictures = () =>
    foodPictures.map((foodPicture) => (
      <Button
        customClass="Food-details-button "
        key={v4()}
        onClick={() => setSelectedPicture(foodPicture)}
      >
        <Image
          className="Food-details-image"
          width={146}
          height={160}
          src={foodPicture}
          alt={foodPicture}
        />
      </Button>
    ));

  return (
    <div className="Food-details-pictures">
      <Image
        className="Food-details-image "
        width={930}
        height={450}
        src={selectedPicture}
        alt="Selected food"
        priority
        quality={100}
      />

      <div className="Food-details-images">{renderFoodPictures()}</div>
    </div>
  );
};

export default FoodPictures;
