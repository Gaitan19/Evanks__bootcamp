import PropTypes from 'prop-types';
import Button from '../Button';

const TextButton = (props) => {
  const {
    customClass,
    title,
    text,
    buttonText,
    hasImage,
    hasFillButton,
    children,
  } = props;

  const textButton = (
    <>
      <h2 className={`${customClass}-title`}>{title}</h2>
      <p className={`${customClass}-text`}>{text}</p>
      {hasFillButton && (
        <Button type="button" customClass="Button-fill">
          <span className="Button-fill-text">{buttonText}</span>
        </Button>
      )}
      {children}
    </>
  );

  const renderTextButton = () => {
    return hasImage ? (
      <>
        <div className={`${customClass}-info`}>{textButton}</div>
        <div className={`${customClass}-image`} />
      </>
    ) : (
      textButton
    );
  };

  return (
    <div className={customClass}>
      <div className={`${customClass}-content`}>{renderTextButton()}</div>
    </div>
  );
};

TextButton.propTypes = {
  customClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  hasImage: PropTypes.bool,
  hasFillButton: PropTypes.bool,
  children: PropTypes.node,
};

TextButton.defaultProps = {
  text: '',
  buttonText: '',
  hasImage: false,
  hasFillButton: false,
  children: <></>,
};

export default TextButton;
