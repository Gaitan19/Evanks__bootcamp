import Link from 'next/link';
import { v4 } from 'uuid';
import { openingHours, quickLinks, supports } from '@/constants/footerLists';
import FooterHelp from './FooterHelp';
import FooterList from './FooterList';

const Footer = () => {
  const renderListLinks = (listLinks) => {
    return listLinks.map((listLink) => {
      return (
        <li className="Footer-link" key={v4()}>
          <Link href={listLink.route} className="Footer-item">
            {listLink.text}
          </Link>
        </li>
      );
    });
  };

  const renderOpeningHours = () => {
    return openingHours.map((openingHour) => {
      return (
        <tr key={v4()}>
          <th className="Footer-table-cell">{openingHour.day}</th>
          <td className="Footer-table-cell">{openingHour.shedule}</td>
        </tr>
      );
    });
  };

  return (
    <div className="Footer">
      <div className="Footer-container">
        <FooterHelp />
        <FooterList customClass="quick" title="Quick links">
          <ul className="Footer-list">{renderListLinks(quickLinks)}</ul>
        </FooterList>

        <FooterList customClass="support" title="Support">
          <ul className="Footer-list">{renderListLinks(supports)}</ul>
        </FooterList>

        <FooterList customClass="opening" title="Opening hours">
          <table className="Footer-table">
            <tbody>{renderOpeningHours()}</tbody>
          </table>
        </FooterList>
      </div>
      <div className="Footer-copyright">
        <div className="Footer-copyright-content">
          <span className="Footer-copyright-text">
            Copyright &copy; 2022 All Rights Reserved
          </span>
          <div className="Footer-copyright-image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
