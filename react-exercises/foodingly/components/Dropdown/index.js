import PropTypes from 'prop-types';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import { useState } from 'react';
import { v4 } from 'uuid';
import routes from '@/constants/routes';

const Dropdown = (props) => {
  const {
    customClass,
    modifiedClass,
    items,
    route,
    menuOptions,
    isMenu,
    children,
    direction,
    text,
  } = props;
  const [dropdownText, setDropdpwnText] = useState(items[0]);

  const handleOptions = (option) => {
    const {
      target: { innerHTML },
    } = option;
    setDropdpwnText(innerHTML);
  };

  const renderDropdown = () => {
    if (!isMenu) {
      return items.map((item) => {
        return (
          <CDropdownItem
            className={`${customClass}-options`}
            key={v4()}
            onClick={handleOptions}
            href={route}
          >
            {item}
          </CDropdownItem>
        );
      });
    }

    return menuOptions.map((menuOption) => {
      return (
        <CDropdownItem
          className={`${customClass}-options ${modifiedClass}-option`}
          key={v4()}
          href={menuOption.route}
        >
          {menuOption.text}
        </CDropdownItem>
      );
    });
  };

  return (
    <CDropdown
      className={`${customClass} ${modifiedClass}`}
      direction={direction}
    >
      <CDropdownToggle
        className={`${customClass}-toggle ${modifiedClass}`}
        color="secondary"
      >
        {isMenu ? text : dropdownText}
      </CDropdownToggle>
      <CDropdownMenu className={`${customClass}-menu ${modifiedClass}-options`}>
        {renderDropdown()}
        {children}
      </CDropdownMenu>
    </CDropdown>
  );
};

Dropdown.propTypes = {
  customClass: PropTypes.string,
  items: PropTypes.array,
  route: PropTypes.string,
  menuOptions: PropTypes.array,
  isMenu: PropTypes.bool,
  children: PropTypes.node,
  direction: PropTypes.string,
  text: PropTypes.string,
  modifiedClass: PropTypes.string,
};

Dropdown.defaultProps = {
  customClass: 'Dropdown',
  items: [],
  route: routes.home,
  menuOptions: [],
  isMenu: false,
  children: <></>,
  direction: 'center',
  text: '',
  modifiedClass: '',
};

export default Dropdown;
