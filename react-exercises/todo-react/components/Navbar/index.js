import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';
import { contextTodo } from '../TodoContext';
import { handleLogout } from '@/services/user';
import { alertMessage } from '../Alert';
import routes from '@/constants/routes';

const Navbar = (props) => {
  const { customClass } = props;
  const { theme, user, setUser } = useContext(contextTodo);
  const router = useRouter();
  const containerTheme = theme === 'dark' && 'dark-mode-container';
  const textTheme = theme === 'dark' && 'dark-mode-text';

  const handleOnClick = async () => {
    try {
      const { status } = await handleLogout(user.token);
      if (status === 200) {
        alertMessage.success('Log Out successfully');
        setUser({});
        router.push(routes.login);
      } else {
        alertMessage.error('Log Out unsuccess');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    }
  };

  return (
    <section className={`d-flex ${customClass} `}>
      <div className={`${customClass}-header ${containerTheme}`}>
        <ul className={`${customClass}-menu`}>
          <li className={`${customClass}-menu-text ${textTheme}`}>
            {user.name}
          </li>
          <li className={`${customClass}-menu-text`}>
            <Button
              customClass={`${customClass}-logout ${textTheme}`}
              buttonText="Logout"
              onClick={handleOnClick}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  customClass: PropTypes.string.isRequired,
};

export default Navbar;
