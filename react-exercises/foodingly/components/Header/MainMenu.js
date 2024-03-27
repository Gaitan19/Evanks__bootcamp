import Link from 'next/link';
import { CNavItem, CNavbar, CNavbarBrand } from '@coreui/react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { v4 } from 'uuid';
import { useState, useContext } from 'react';
import { Badge } from '@mui/material';
import routes from '@/constants/routes';
import Dropdown from '../Dropdown';
import { mainMenuOptions } from '@/constants/menuOptions';
import Button from '../Button';
import { foodinglyContext } from '../../context/FoodinglyContext';
import Collapse from './Collapse';

const MainMenu = () => {
  const { productsCart, setVisibleCart } = useContext(foodinglyContext);

  const renderMainMenu = () => {
    return mainMenuOptions.map((mainMenuOption) => {
      if (mainMenuOption.hasOwnProperty('menuOptions')) {
        return (
          <CNavItem key={v4()} className="Navbar-item">
            <Dropdown
              isMenu
              menuOptions={mainMenuOption.menuOptions}
              text={mainMenuOption.text}
              modifiedClass="Menu-dropdown"
            />
          </CNavItem>
        );
      }

      return (
        <CNavItem key={v4()} className="Navbar-item">
          <Link className="Menu-item" href={mainMenuOption.route}>
            {mainMenuOption.text}
          </Link>
        </CNavItem>
      );
    });
  };

  const [visibleOptions, setVisibleOptions] = useState(false);
  const [visibleTools, setVisibleTools] = useState(false);

  return (
    <>
      <CNavbar
        expand="xl"
        colorScheme="light"
        className="bg-light Navbar Navbar-sticky"
      >
        <div className="Navbar-content">
          <CNavbarBrand href={routes.home} className="Navbar-brand">
            <div className="Menu-image" />
          </CNavbarBrand>

          <div className="Navbar-menu">
            <Collapse
              customClass="options"
              toggleClass="-options"
              visible={visibleOptions}
              setVisible={setVisibleOptions}
            >
              {renderMainMenu()}
            </Collapse>

            <Collapse
              customClass="tools"
              navClass="-tools"
              visible={visibleTools}
              setVisible={setVisibleTools}
            >
              <CNavItem>
                <Button
                  customClass="Button-tools"
                  onClick={() => setVisibleCart(true)}
                >
                  <Badge badgeContent={productsCart.length} color="success">
                    <FaShoppingBag />
                  </Badge>
                </Button>
              </CNavItem>
              <CNavItem>
                <Button customClass="Button-tools">
                  <FaSearch className="Menu-icon" />
                </Button>
              </CNavItem>
              <CNavItem>
                <Button
                  buttonText="Reservation"
                  customClass="Button-reservation"
                />
              </CNavItem>
            </Collapse>
          </div>
        </div>
      </CNavbar>
    </>
  );
};

export default MainMenu;
