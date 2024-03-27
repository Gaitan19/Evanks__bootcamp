import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import { formatDate } from '@/utils/FormatDate';

const AuthorCard = (props) => {
  const { image, title, text, date, authorName, authorPicture } = props;

  return (
    <article className="Authors-card">
      <div className="Authors-container">
        <Image
          className="Authors-image"
          width={456}
          height={275}
          alt="food"
          priority
          src={image}
        />
      </div>
      <div className="Authors-card-info">
        <Link className="Authors-card-title" href="#">
          {title}
        </Link>
        <p className="Authors-card-text">{text}</p>
        <div className="Authors-information">
          <Image
            width={50}
            height={50}
            alt="author"
            priority
            src={authorPicture}
            className="Authors-picture"
          />
          <div>
            <span className="Authors-name">{authorName}</span>
            <div>
              <span className="Authors-date">{formatDate(date)}</span>
              <FaCircle className="Authors-circle" />
              <span className="Authors-time"> 8 min read</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

AuthorCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorPicture: PropTypes.string.isRequired,
};

export default AuthorCard;
