import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { options, customClass } = props;

  const renderSelectOptions = () =>
    options.map((option) => (
      <option key={v4()} value={option}>
        {option}
      </option>
    ));

  return (
    <select className={`Order-inputs ${customClass}`}>
      {renderSelectOptions()}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  customClass: PropTypes.string,
};

Select.defaultProps = {
  customClass: '',
};

export default Select;
