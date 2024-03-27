import Image from 'next/image';
import { v4 } from 'uuid';

const Best = () => {
  const renderBestText = () =>
    [...Array(2).keys()].map(() => (
      <p key={v4()} className="Best-text">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr
      </p>
    ));

  return (
    <div className="Best">
      <div className="Best-content">
        <div className="Best-container-image">
          <Image
            className="Best-image"
            width={800}
            height={100}
            alt="about us"
            priority
            quality="100"
            src="/about_right.png"
          />
        </div>
        <div className="Best-container-text">
          <span className="Best-about">About us</span>
          <h2 className="Best-title">Why We are the best Since 2000</h2>
          <div className="Best-container">{renderBestText()}</div>
        </div>
      </div>
    </div>
  );
};

export default Best;
