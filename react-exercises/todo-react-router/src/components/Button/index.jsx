import PropTypes from 'prop-types';
import { CButton } from '@coreui/react';

const Button = (props) => {
  const {
    customClass,
    buttonText,
    buttonType,
    children,
    onClick,
    buttonColor,
  } = props;

  return (
    <CButton
      className={customClass}
      type={buttonType}
      onClick={onClick}
      color={buttonColor}
    >
      {buttonText}
      {children}
    </CButton>
  );
};

Button.propTypes = {
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['button', 'reset', 'submit']),
  buttonText: PropTypes.string,
  children: PropTypes.node,
  buttonColor: PropTypes.string,
};

Button.defaultProps = {
  buttonText: '',
  onClick: () => {},
  buttonType: 'button',
  children: <></>,
  buttonColor: 'primary',
};

export default Button;
