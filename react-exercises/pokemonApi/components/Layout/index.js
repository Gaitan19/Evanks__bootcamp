import PropTypes from 'prop-types';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ItemList from '@/components/ItemList';
import { queryVariables } from '@/constants/queryVariables';

const Layout = (props) => {
  const {
    urlImage,
    widthImage,
    heightImage,
    description,
    titlePage,
    query,
    href,
    image,
    isHome,
    children,
    type,
    favorites,
    totalData,
  } = props;

  const renderListPage = () => {
    if (!isHome) {
      return (
        <ItemList
          isFilter
          query={query}
          variables={queryVariables}
          href={href}
          urlImage={image}
          type={type}
          favorites={favorites}
          totalData={totalData}
        />
      );
    }
    return <></>;
  };

  return (
    <div className="Container">
      <Navbar
        image="/pokemon-logo.png"
        imageDescription="Logo pokemon"
        imageClass="Nav-image"
        linkClass="Nav-item"
      />

      <div className="Pokemon-nav-container Container-title">
        <Image
          width={widthImage}
          height={heightImage}
          src={urlImage}
          alt={description}
          priority
        />
        <h2 className="Home-text">{titlePage}</h2>
        {children}
      </div>
      {renderListPage()}
    </div>
  );
};

Layout.propTypes = {
  urlImage: PropTypes.string,
  widthImage: PropTypes.number.isRequired,
  heightImage: PropTypes.number.isRequired,
  query: PropTypes.object,
  href: PropTypes.string,
  description: PropTypes.string,
  titlePage: PropTypes.string,
  image: PropTypes.string,
  isHome: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string,
  favorites: PropTypes.array,
  totalData: PropTypes.number,
};

Layout.defaultProps = {
  description: '',
  titlePage: '',
  image: '/whoPokemon.jpg',
  isHome: false,
  children: <></>,
  urlImage: '',
  query: {},
  href: '',
  type: '',
  favorites: [],
  totalData: 0,
};

export default Layout;
