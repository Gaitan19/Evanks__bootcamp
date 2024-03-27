import PropTypes from 'prop-types';

const FormTitle = (props) => {
  const { customClass, title, instructions, formatText } = props;

  return (
    <div className={customClass}>
      <h2 className={`${formatText}-title`}>{title}</h2>
      <p className={`${formatText}-text`}>{instructions}</p>
    </div>
  );
};

FormTitle.propTypes = {
  customClass: PropTypes.string.isRequired,
  title: PropTypes.string,
  instructions: PropTypes.string,
  formatText: PropTypes.string.isRequired,
};

FormTitle.defaultProps = {
  title: '',
  instructions: '',
};

export default FormTitle;
