import React from 'react';
import TextButton from './TextButton';
import ChefsCard from './ChefsCard';
import { chefs } from '@/constants/chefsList';

const Chefs = () => {
  const renderChefs = () =>
    chefs.map((chef) => <ChefsCard chefInformation={chef} key={chef.id} />);

  return (
    <TextButton
      customClass="Reservation"
      text="Our Experienced chefs"
      title="Meet Our Chefs"
    >
      <div className="Chefs">{renderChefs()}</div>
    </TextButton>
  );
};

export default Chefs;
