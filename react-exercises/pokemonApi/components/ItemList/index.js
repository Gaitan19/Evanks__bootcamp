import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import Search from '../Search';

const ItemList = (props) => {
  const {
    isFilter,
    query,
    variables,
    urlImage,
    href,
    isFavorite,
    favorites,
    type,
    totalData,
  } = props;

  const { data, error, loading, refetch } = useQuery(query, variables);

  if (loading) return <span>loading ...</span>;
  if (error) {
    return <span>No items available</span>;
  }

  const { list } = data;

  const filter = (text) => {
    refetch({
      limit: null,
      where: {
        name: {
          _iregex: text,
        },
      },
    });
  };

  const handleNext = (text) => {
    if (!isFavorite) {
      refetch({
        limit: list.length + 12,
        where: {
          name: {
            _iregex: text,
          },
        },
      });
    }
  };

  const handleHasMore = () => {
    return list.length < totalData;
  };

  const renderFilter = () => {
    if (isFilter) {
      return (
        <Search
          customClass="Search"
          placeholder="Pokemons"
          handleFilter={filter}
        />
      );
    }
    return <></>;
  };

  const renderPokemons = () => {
    const cardsList = isFavorite ? favorites : list;

    return cardsList.map((pokemon) => {
      const isFavoriteItem =
        favorites.some((items) => items.id === pokemon.id) || false;

      return (
        <Card
          key={pokemon.id}
          customClass="Card"
          imageClass="Card-image"
          image={urlImage}
          descriptionImage="pokemon card"
          text={pokemon.name}
          href={`${href}/${pokemon.id}`}
          pokemon={pokemon}
          type={type}
          isFavoriteItem={isFavoriteItem}
        />
      );
    });
  };

  return (
    <div className="Container-search">
      {renderFilter()}
      <div className="List">
        <div className="List-container" id="Scroll-container">
          <InfiniteScroll
            dataLength={list.length}
            hasMore
            next={handleNext}
            loader="Loading..."
            scrollableTarget="Scroll-container"
            className="List-scroll"
            hasMore={handleHasMore()}
          >
            {renderPokemons()}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

ItemList.propTypes = {
  isFilter: PropTypes.bool,
  query: PropTypes.object,
  variables: PropTypes.object,
  urlImage: PropTypes.string,
  href: PropTypes.string,
  isFavorite: PropTypes.bool,
  favorites: PropTypes.array,
  type: PropTypes.string,
  totalData: PropTypes.number,
};

ItemList.defaultProps = {
  isFilter: false,
  query: {},
  variables: {},
  urlImage: '/whoPokemon.jpg',
  href: '',
  isFavorite: false,
  favorites: [],
  type: '',
  totalData: 0,
};

export default ItemList;
