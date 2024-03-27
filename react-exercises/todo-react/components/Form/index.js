import PropTypes from 'prop-types';
import Image from 'next/image';

const Form = (props) => {
  const { children, customClass, imageUrl, imageDescription, onSubmit } = props;

  return (
    <form className="d-flex justify-content-center" onSubmit={onSubmit}>
      <div className={customClass}>
        <Image
          width={112}
          height={79}
          src={imageUrl}
          alt={imageDescription}
          priority
        />
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
