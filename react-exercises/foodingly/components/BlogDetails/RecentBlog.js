import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import { formatDate } from '@/utils/FormatDate';

const RecentBlog = (props) => {
  const { image, text, date } = props;

  return (
    <article className="Details-recent">
      <Image
        width={97}
        height={80}
        alt="blog food"
        priority
        src={image}
        className="Details-recent-image"
      />
      <div className="Details-recent-information">
        <p className="Details-recent-text">{text}</p>
        <div className="Details-recent-container">
          <span className="Details-recent-date">{formatDate(date)}</span>
          <FaCircle className="Details-recent-circle" />
          <span>8 min read</span>
        </div>
      </div>
    </article>
  );
};

RecentBlog.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default RecentBlog;
