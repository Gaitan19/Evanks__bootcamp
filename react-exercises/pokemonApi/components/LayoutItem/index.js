import PropTypes from 'prop-types';
import Image from 'next/image';
import { v4 } from 'uuid';
import Navbar from '@/components/Navbar';

const LayoutItem = (props) => {
  const {
    information,
    name,
    title,
    titleDescription,
    descriptions,
    image,
    alt,
    isList,
  } = props;

  const renderList = () => {
    return information.map((item) => {
      return <li key={v4()}>{`${item.text}${item.value}`}</li>;
    });
  };

  const renderDescription = () => {
    if (isList) {
      return (
        <div className="Container-data">
          {descriptions.map((description) => {
            return (
              <div className="Container-descriptions" key={v4()}>
                <h2 className="Container-descriptions-title">
                  {description.name}:
                </h2>
                <p className="Container-descriptions-text">
                  {description.text}
                </p>
              </div>
            );
          })}
        </div>
      );
    }

    return <p className="Information-list">{descriptions}</p>;
  };

  const renderInformation = () => {
    return (
      <div className="Container-characteristics">
        <h2 className="Information-name">{name}</h2>
        <ul className="Information-list">{renderList()}</ul>
        <div className="Container-information">
          <h2 className="Information-name">{titleDescription}</h2>
          {renderDescription()}
        </div>
      </div>
    );
  };

  return (
    <div className="Container align-items-center">
      <Navbar
        image="/pokemon-logo.png"
        imageDescription="Logo pokemon"
        imageClass="Nav-image"
        linkClass="Nav-item"
      />

      <div className="Information  Pokemon-nav-container">
        <h2 className="Home-text">{title}</h2>
        <Image src={image} width={200} height={200} alt={alt} priority />
        {renderInformation()}
      </div>
    </div>
  );
};

LayoutItem.propTypes = {
  information: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleDescription: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isList: PropTypes.bool,
};

LayoutItem.defaultProps = {
  isList: false,
};

export default LayoutItem;
