import PropTypes from "prop-types";

const Button = (props) => {
  const { customClass, buttonText, buttonType, children, onClick } = props;

  return (
    <button className={customClass} type={buttonType} onClick={onClick}>
      {buttonText}
      {children}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['button', 'reset', 'submit']),
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  buttonText: '',
  onClick: () => {},
  buttonType: 'button',
  children: <></>,
};

export default Button;
