import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getVariablesPokemon } from '@/constants/queryVariables';
import { getPokemon } from '@/graphql/pokemons';
import LayoutItem from '@/components/LayoutItem';
import { alertMessage } from '@/components/Alert';

const Pokemon = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(
    getPokemon,
    getVariablesPokemon(id),
  );

  const renderInformation = () => {
    if (loading) return <span>loading ...</span>;
    if (error) return alertMessage.error(error);

    const { list } = data;
    const types = [];
    const abilities = [];

    list[0].types.forEach((type) => {
      types.push(type.typeName.name);
    });

    list[0].abilities.forEach((ability) => {
      const {
        abilityName: { name, abilityDescription },
      } = ability;

      const dataAbility = {
        name: name || '',
        text: abilityDescription[0].description || '',
      };

      abilities.push(dataAbility);
    });

    const information = [
      {
        text: 'Pokemon#',
        value: list[0].id,
      },
      {
        text: 'Weight:',
        value: list[0].weight,
      },
      {
        text: 'height:',
        value: list[0].height,
      },
      {
        text: 'Base experience:',
        value: list[0].base_experience,
      },
      {
        text: 'Type: ',
        value: types.join(', '),
      },
    ];

    return (
      <LayoutItem
        information={information}
        name={list[0].name}
        title="Information pokemon"
        titleDescription="Pokemon's ablilities description"
        image="/Pokeballs_icon.png"
        alt="pokeballs"
        isList
        descriptions={abilities}
      />
    );
  };

  return renderInformation();
};

export default Pokemon;
