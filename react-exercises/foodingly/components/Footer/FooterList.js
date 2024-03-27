import PropTypes from 'prop-types';

const FooterList = (props) => {
  const { customClass, children, title } = props;
  return (
    <div className={`Footer-${customClass}`}>
      <h2 className="Footer-title">{title}</h2>
      {children}
    </div>
  );
};

FooterList.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

FooterList.defaultProps = {
  customClass: '',
  children: <></>,
};

export default FooterList;
