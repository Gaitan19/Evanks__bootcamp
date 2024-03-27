import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import optionsMenu from '@/constants/optionsMenu';
import ItemList from '@/components/ItemList';
import { itemQuery } from '@/graphql/Items';
import { queryVariables } from '@/constants/queryVariables';
import { pokemonMoves } from '@/graphql/pokemonMoves';
import { pokemonQuery } from '@/graphql/pokemons';
import { routes } from '@/constants/routes';
import total from '@/constants/totalData';

const Tabs = (props) => {
  const { customClass, isFavorites } = props;
  const [activeTab, setActiveTab] = useState('1');

  const favoritesPokemons =
    useSelector((state) => state.favorites.pokemons) || [];
  const favoritesItems = useSelector((state) => state.favorites.items) || [];
  const favoritesMoves = useSelector((state) => state.favorites.moves) || [];

  const renderTotalType = (totalFavorites, totalItems) => {
    if (isFavorites) {
      return totalFavorites;
    }

    return totalItems;
  };

  const changeTab = (tabNumber) => {
    if (activeTab !== tabNumber) {
      setActiveTab(tabNumber);
    }
  };

  const renderItems = () => {
    return optionsMenu.map((option) => {
      return (
        <NavItem key={option.id}>
          <NavLink
            className={`Pokemon-tab${
              activeTab === option.id ? '-active Pokemon-tab' : ''
            }`}
            key={option.id}
            onClick={() => changeTab(option.id)}
          >
            {option.title}
          </NavLink>
        </NavItem>
      );
    });
  };

  return (
    <div className={customClass}>
      <div className="Pokemon-menu">
        <Nav className="Pokemon-nav">{renderItems()}</Nav>
      </div>

      <TabContent className="Pokemon-tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <ItemList
            query={pokemonQuery.pokemonList}
            variables={queryVariables}
            href={routes.pokemons}
            urlImage="/pokemon_go.png"
            isFavorite={isFavorites}
            type="pokemons"
            favorites={favoritesPokemons}
            totalData={renderTotalType(
              favoritesPokemons.lenght,
              total.totalPokemons,
            )}
          />
        </TabPane>

        <TabPane tabId="2">
          <ItemList
            query={itemQuery.itemList}
            variables={queryVariables.listVariables}
            href={routes.items}
            urlImage="/Coin_Bag_icon.png"
            isFavorite={isFavorites}
            type="items"
            favorites={favoritesItems}
            totalData={renderTotalType(favoritesItems.lenght, total.totalItems)}
          />
        </TabPane>

        <TabPane tabId="3">
          <ItemList
            query={pokemonMoves.movesList}
            variables={queryVariables}
            href={routes.moves}
            urlImage="/Pokemon_Exchange.png"
            isFavorite={isFavorites}
            type="moves"
            favorites={favoritesMoves}
            totalData={renderTotalType(favoritesMoves.lenght, total.totalMoves)}
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

Tabs.propTypes = {
  customClass: PropTypes.string,
  isFavorites: PropTypes.bool,
};

Tabs.defaultProps = {
  customClass: '',
  isFavorites: false,
};

export default Tabs;
