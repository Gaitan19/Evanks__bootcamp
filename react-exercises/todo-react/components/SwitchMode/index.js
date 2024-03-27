import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';

const SwitchMode = (props) => {
  const { customClass, inputType, onClick, checked } = props;

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
      <div className="Switch">
        <input
          className="Switch-check"
          type={inputType}
          checked={checked}
          onChange={onClick}
        />
        <span className="Switch-slider" />
      </div>
      {handleIcon()}
    </div>
  );
};

SwitchMode.propTypes = {
  customClass: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    'button',
    'checkbox',
    'email',
    'password',
    'text',
  ]),
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};

SwitchMode.deafaultProps = {
  inputType: 'checkbox',
  onclick: () => {},
  checked: false,
};

export default SwitchMode;
