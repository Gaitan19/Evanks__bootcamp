import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { navItems } from '@/constants/routes';

const Navbar = (props) => {
  const { image, imageDescription, imageClass, linkClass } = props;

  const renderNavbar = () => {
    return navItems.map((option) => {
      return (
        <li key={option.id}>
          <Link href={option.route} className={linkClass}>
            {option.text}
          </Link>
        </li>
      );
    });
  };

  return (
    <nav className="Nav">
      <Image
        width={200}
        height={200}
        src={image}
        alt={imageDescription}
        className={imageClass}
      />

      <ul className="Nav-menu">{renderNavbar()}</ul>
    </nav>
  );
};

Navbar.propTypes = {
  image: PropTypes.string,
  imageDescription: PropTypes.string,
  imageClass: PropTypes.string,
  linkClass: PropTypes.string,
};

Navbar.defaultProps = {
  image: '',
  imageDescription: '',
  imageClass: '',
  linkClass: '',
};

export default Navbar;
