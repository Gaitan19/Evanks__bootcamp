import Link from 'next/link';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { v4 } from 'uuid';
import Dropdown from '../Dropdown';
import Navbar from '../Navbar';
import routes from '@/constants/routes';

const TopBar = () => {
  const socialIcons = [
    <FaFacebookSquare className="Navbar-icons" />,
    <FaTwitterSquare className="Navbar-icons" />,
    <FaInstagramSquare className="Navbar-icons" />,
    <FaLinkedin className="Navbar-icons" />,
  ];
  const languajeOptions = ['English', 'Arabic', 'French'];
  const currencyType = ['USD', 'BD', 'URO'];

  const renderIconList = () => {
    return socialIcons.map((socialIcon) => {
      return (
        <li key={v4()}>
          <Link href={routes.home}>{socialIcon}</Link>
        </li>
      );
    });
  };

  return (
    <Navbar customClass="Navbar-top">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <ul className="Navbar-list">
            {renderIconList()}
            <li>
              <Link href="tel:+01123456789" className="Navbar-contact">
                +011 234 567 89
              </Link>
            </li>
            <li>
              <Link href="mailto:contact@domain.com" className="Navbar-contact">
                contact@domain.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6">
          <ul className="Navbar-options">
            <li>
              <Dropdown items={languajeOptions} />
            </li>
            <li>
              <Dropdown items={currencyType} />
            </li>
            <li>
              <Link className="Navbar-account" href={routes.costumerDashboard}>
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default TopBar;
