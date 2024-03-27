import Link from 'next/link';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { v4 } from 'uuid';
import routes from '@/constants/routes';
import FooterList from './FooterList';

const FooterHelp = () => {
  const socialIcons = [
    <FaFacebookSquare className="Footer-icon" />,
    <FaTwitterSquare className="Footer-icon" />,
    <FaInstagramSquare className="Footer-icon" />,
    <FaLinkedin className="Footer-icon" />,
  ];

  const renderSocialIcons = () => {
    return socialIcons.map((socialIcon) => {
      return (
        <li className="Footer-icons" key={v4()}>
          <Link href={routes.home}>{socialIcon}</Link>
        </li>
      );
    });
  };

  return (
    <FooterList customClass="help" title="Need any help?">
      <div className="Footer-help-info">
        <div className="Footer-help-item">
          <span className="Footer-help-text">Call 24/7 for any help</span>
          <a className="Footer-help-green" href="tel:+00-123-456-789">
            +00 123 456 789
          </a>
        </div>
        <div className="Footer-help-item">
          <span className="Footer-help-text">Mail to our support team</span>
          <a className="Footer-help-green" href="mailto:support@domain.com">
            support@domain.com
          </a>
        </div>
        <div className="Footer-help-item">
          <span className="Footer-help-text">Follow us on</span>
          <ul className="Footer-social">{renderSocialIcons()}</ul>
        </div>
      </div>
    </FooterList>
  );
};

export default FooterHelp;
