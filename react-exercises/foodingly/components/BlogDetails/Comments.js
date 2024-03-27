import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaReplyAll } from 'react-icons/fa';
import Button from '../Button';

const Comments = (props) => {
  const { name, text, image } = props;

  return (
    <div className="Details-comment">
      <Image
        width={150}
        height={90}
        alt={`user ${name}`}
        priority
        src={image}
        className="Details-comment-picture"
      />
      <div className="Details-comment-information">
        <div className="Details-comment-container">
          <span className="Details-comment-name">{name}</span>
          <Button customClass="Details-comment-reply">
            <FaReplyAll className="Details-comment-icon" />
            Reply
          </Button>
        </div>
        <p className="Details-comment-text">{text}</p>
      </div>
    </div>
  );
};

Comments.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Comments;
