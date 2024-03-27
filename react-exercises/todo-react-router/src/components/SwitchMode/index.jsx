import { CFormSwitch } from '@coreui/react';
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';

const SwitchMode = (props) => {
  const { customClass, onClick, checked } = props;

  const handleIcon = () => {
    if (checked) {
      return <FaMoon className={`${customClass}-icon`} />;
    }
    return <FaSun className={`${customClass}-icon`} />;
  };

  return (
    <div
      className={`form-check form-switch ${customClass}-container`}
      onClick={onClick}
    >
      <CFormSwitch checked={checked} onChange={onClick} />
      {handleIcon()}
    </div>
  );
};

SwitchMode.propTypes = {
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};

SwitchMode.deafaultProps = {
  onclick: () => {},
  checked: false,
};

export default SwitchMode;
