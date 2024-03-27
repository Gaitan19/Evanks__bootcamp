import Image from 'next/image';
import Button from '../Button';

const Subscribe = () => (
  <div className="Subscribe">
    <div className="Subscribe-content">
      <div className="Subscribe-info">
        <Image
          height={100}
          width={100}
          src="/email.png"
          alt="email icon"
          priority
          className="Subscribe-image"
        />
        <div>
          <h3 className="Subscribe-text">Get the latest Blogs and offers</h3>
          <h2 className="Subscribe-text">Subscribe to our Blogsletter</h2>
        </div>
      </div>
      <form className="Subscribe-form">
        <input
          type="text"
          placeholder="Enter your mail address"
          className="Subscribe-input"
        />
        <Button type="button" customClass="Button-fill Button-subscribe">
          <span className="Button-fill-text">Subscribe</span>
        </Button>
      </form>
    </div>
  </div>
);

export default Subscribe;
