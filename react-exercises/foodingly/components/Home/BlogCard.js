import Link from 'next/link';
import PropTypes from 'prop-types';
import { FaCalendarDay, FaUsers } from 'react-icons/fa';
import { formatDate } from '@/utils/FormatDate';

const BlogCard = (props) => {
  const { blog } = props;
  const { image, title, author, text, date, info } = blog;

  return (
    <article className="Blog-card">
      <div className="Blog-container">
        <div
          className="Blog-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <span className="Blog-badge">{info}</span>
      </div>
      <div className="Blog-card-info">
        <Link className="Blog-card-title" href="#">
          {title}
        </Link>
        <p className="Blog-card-text">{text}</p>
        <div className="Blog-card-details">
          <div className="Blog-date">
            <FaCalendarDay className="Blog-icon" />
            <div>
              <span className="Blog-date-bold">Date:</span>
              <p className="Blog-date-light">{formatDate(date)}</p>
            </div>
          </div>
          <div className="Blog-owner">
            <FaUsers className="Blog-icon" />
            <div>
              <span className="Blog-date-bold">By:</span>
              <p className="Blog-date-light">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
