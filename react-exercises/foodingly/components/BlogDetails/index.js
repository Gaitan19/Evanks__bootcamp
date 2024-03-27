import { v4 } from 'uuid';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { blogComents, blogTags, recentBlogs } from '@/constants/blogsList';
import Banner from '../Banner';
import Layout from '../Layout';
import Historical from './Historical';
import Comments from './Comments';
import CommentForm from './CommentForm';
import DetailsRight from './DetailsRight';
import RecentBlog from './RecentBlog';
import Button from '../Button';

const BlogDetails = () => {
  const socialIcons = [
    <FaFacebookF className="Details-icon" />,
    <FaTwitter className="Details-icon" />,
    <FaInstagram className="Details-icon" />,
    <FaLinkedinIn className="Details-icon" />,
  ];

  const renderComments = () =>
    blogComents.map((comment) => (
      <Comments
        image={comment.image}
        name={comment.name}
        text={comment.text}
        key={comment.id}
      />
    ));

  const renderRecentBlogs = () =>
    recentBlogs.map((recentBlog) => (
      <RecentBlog
        key={recentBlog.id}
        image={recentBlog.image}
        text={recentBlog.text}
        date={recentBlog.date}
      />
    ));

  const rendePopularTags = () =>
    blogTags.map((blogTag) => (
      <Button customClass="Details-tag" buttonText={blogTag} key={v4()} />
    ));

  const renderSharesCauses = () =>
    socialIcons.map((socialIcon) => (
      <a key={v4()} className="Details-social" href="#">
        {socialIcon}
      </a>
    ));

  return (
    <Layout headPageTitle="BlogDetails">
      <Banner title="Blog" page="Blog Details" />
      <div className="Details">
        <div className="Details-content">
          <div className="Details-historical">
            <Historical />
            <div className="Details-comments">
              <h3 className="Details-comments-counter">{`${blogComents.length} Comments`}</h3>
              <div className="Details-comments-list">{renderComments()}</div>
            </div>
            <CommentForm />
          </div>
          <div className="Details-right">
            <DetailsRight title="Recent Blogs">
              {renderRecentBlogs()}
            </DetailsRight>
            <DetailsRight title="Popular tags" customClass="Details-tags">
              {rendePopularTags()}
            </DetailsRight>
            <DetailsRight title="Share causes" customClass="Details-shares">
              {renderSharesCauses()}
            </DetailsRight>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
