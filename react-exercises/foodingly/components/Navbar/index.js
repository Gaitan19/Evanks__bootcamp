import { CContainer, CNavbar } from '@coreui/react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { children, customClass } = props;

  return (
    <CNavbar className={customClass}>
      <CContainer fluid>
        <CContainer> {children}</CContainer>
      </CContainer>
    </CNavbar>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
  customClass: PropTypes.string,
};

Navbar.defaultProps = {
  children: <></>,
  customClass: 'Navbar',
};

export default Navbar;
