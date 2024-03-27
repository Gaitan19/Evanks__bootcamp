import Slider from '@mui/material/Slider';
import { useState } from 'react';
import FoodLeftItem from './FoodLeftItem';
import Button from '../Button';

const FilterPrice = () => {
  const [valueSlider, setValueSlider] = useState([0, 200]);

  const minDistance = 200;

  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValueSlider([
        Math.min(newValue[0], valueSlider[1] - minDistance),
        valueSlider[1],
      ]);
    } else {
      setValueSlider([
        valueSlider[0],
        Math.max(newValue[1], valueSlider[0] + minDistance),
      ]);
    }
  };

  return (
    <FoodLeftItem title="Filter by price">
      <Slider
        value={valueSlider}
        onChange={handleChangeSlider}
        valueLabelDisplay="on"
        max={1000}
        min={0}
        step={50}
        disableSwap
        className="Food-slider"
        valueLabelFormat={(value) => `$${value}`}
      />
      <Button buttonText="Apply" customClass="Button-apply" />
    </FoodLeftItem>
  );
};

export default FilterPrice;
