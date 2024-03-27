import Link from 'next/link';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import routes from '@/constants/routes';

const Banner = (props) => {
  const { customClass, title, redirect, href, page } = props;

  return (
    <div className={customClass}>
      <div className={`${customClass}-content`}>
        <h2 className={`${customClass}-title`}>{title}</h2>

        <ul className={`${customClass}-pages`}>
          <li className={`${customClass}-item`}>
            <Link href={href} className={`${customClass}-light`}>
              {redirect}
            </Link>
          </li>
          <li className={`${customClass}-item`}>
            <FaCircle className={`${customClass}-icon`} />
          </li>
          <li className={`${customClass}-item`}>{page}</li>
        </ul>
      </div>
    </div>
  );
};

Banner.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  href: PropTypes.string,
  page: PropTypes.string,
};

Banner.defaultProps = {
  customClass: 'Banner',
  redirect: 'Home',
  href: routes.home,
  page: 'Home',
};

export default Banner;
