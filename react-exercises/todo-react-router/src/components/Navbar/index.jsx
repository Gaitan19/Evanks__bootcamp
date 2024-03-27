import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { contextTodo } from '../TodoContext';
import { handleLogout } from '../../services/user';
import { alertMessage } from '../Alert';
import routes from '../../constants/routes';
import { CContainer, CNav, CNavItem, CNavbar } from '@coreui/react';

const Navbar = (props) => {
  const { customClass } = props;
  const { user, setUser, isDarkTheme } = useContext(contextTodo);
  const [userHasLoggedOut, setUserHasLoggedOut] = useState(false);
  const router = useNavigate();
  const containerTheme = isDarkTheme && 'dark-mode-container';
  const textTheme = isDarkTheme && 'dark-mode-text';

  useEffect(() => {
    if (userHasLoggedOut) {
      router(routes.login);
    }
  }, [userHasLoggedOut]);

  const handleOnClick = async () => {
    try {
      const { status } = await handleLogout(user.token);
      if (status === 200) {
        alertMessage.success('Log Out successfully');
        setUser({});
        setUserHasLoggedOut(true);
      } else {
        alertMessage.error('Log Out unsuccess');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    }
  };

  return (
    <CNavbar
      colorScheme="light"
      className={`bg-light ${customClass} ${customClass}-header ${containerTheme}`}
    >
      <CContainer fluid>
        <CNav className={`${customClass}-menu`}>
          <CNavItem className={`${customClass}-menu-text ${textTheme}`}>
            {user.name}
          </CNavItem>
          <CNavItem className={`${customClass}-menu-text`}>
            <Button
              customClass={`${customClass}-logout ${textTheme}`}
              buttonText="Logout"
              onClick={handleOnClick}
              buttonColor="string"
            />
          </CNavItem>
        </CNav>
      </CContainer>
    </CNavbar>
  );
};

Navbar.propTypes = {
  customClass: PropTypes.string.isRequired,
};

export default Navbar;
