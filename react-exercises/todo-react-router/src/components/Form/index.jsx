import PropTypes from 'prop-types';

const Form = (props) => {
  const { children, customClass, imageUrl, imageDescription, onSubmit } = props;

  return (
    <form className="d-flex justify-content-center" onSubmit={onSubmit}>
      <div className={customClass}>
        <img src={imageUrl} alt={imageDescription} />
        <div className="Format-container">{children}</div>
      </div>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  children: <></>,
  onSubmit: () => {},
};

export default Form;
