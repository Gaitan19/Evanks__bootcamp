import PropTypes from 'prop-types';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { v4 } from 'uuid';
import Link from 'next/link';
import routes from '@/constants/routes';

const ChefsCard = (props) => {
  const { chefInformation } = props;

  const { image, name, title } = chefInformation;

  const socialIcons = [
    <FaFacebookF className="Chefs-icon" />,
    <FaTwitter className="Chefs-icon" />,
    <FaInstagram className="Chefs-icon" />,
    <FaLinkedinIn className="Chefs-icon" />,
  ];

  const renderIconList = () => {
    return socialIcons.map((socialIcon) => {
      return (
        <li key={v4()}>
          <Link href={routes.home} className="Chefs-link">
            {socialIcon}
          </Link>
        </li>
      );
    });
  };

  return (
    <article className="Chefs-card">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="Chefs-image"
      />
      <div className="Chefs-info">
        <ul className="Chefs-icons">{renderIconList()}</ul>
        <h3 className="Chefs-name">{name}</h3>
        <p className="Chefs-profession">{title}</p>
      </div>
    </article>
  );
};

ChefsCard.propTypes = {
  chefInformation: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChefsCard;
