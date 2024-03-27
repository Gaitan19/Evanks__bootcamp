import Image from 'next/image';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { title, text, secondText } = props;
  return (
    <div className="Hero">
      <div className="Hero-content">
        <div className="Hero-container col-lg-6">
          <p className="Hero-text">{text}</p>
          <h2 className="Hero-title">{title}</h2>
          <p className="Hero-text">{secondText}</p>
        </div>
        <div className="col-lg-6">
          <div className="Hero-image">
            <Image
              width={611}
              height={611}
              alt="banner"
              src="/bg1.png"
              className="Hero-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  secondText: PropTypes.string,
};

Hero.defaultProps = {
  text: '',
  secondText: '',
};

export default Hero;
