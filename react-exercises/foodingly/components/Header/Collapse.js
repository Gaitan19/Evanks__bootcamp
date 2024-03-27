import {
  CCollapse,
  CContainer,
  CNavbarNav,
  CNavbarToggler,
} from '@coreui/react';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  const { visible, setVisible, customClass, toggleClass, navClass, children } =
    props;

  return (
    <CContainer fluid className={`Navbar-container-${customClass}`}>
      <CNavbarToggler
        className={`Navbar-toogle${toggleClass}`}
        aria-expanded={visible}
        onClick={() => setVisible((preVisible) => !preVisible)}
      />
      <CCollapse className="navbar-collapse" visible={visible}>
        <CNavbarNav className={`Navbar-nav${navClass}`}>{children}</CNavbarNav>
      </CCollapse>
    </CContainer>
  );
};

Collapse.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  navClass: PropTypes.string,
  toggleClass: PropTypes.string,
  children: PropTypes.node,
};

Collapse.defaultProps = {
  customClass: '',
  navClass: '',
  toggleClass: '',
  children: <></>,
};

export default Collapse;
