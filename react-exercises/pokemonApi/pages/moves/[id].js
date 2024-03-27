import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getVariablesMove } from '@/constants/queryVariables';
import { getMoveInformation } from '@/graphql/pokemonMoves';
import LayoutItem from '@/components/LayoutItem';
import { alertMessage } from '@/components/Alert';

const Move = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(
    getMoveInformation,
    getVariablesMove(id),
  );

  const renderInformation = () => {
    if (loading) return <span>loading ...</span>;
    if (error) return alertMessage.error(error);

    const { list } = data;

    const {
      type,
      moveClass: { name, moveDescription },
    } = list[0];

    const information = [
      {
        text: 'Move#',
        value: list[0].id,
      },
      {
        text: 'Power:',
        value: list[0].power,
      },
      {
        text: 'PP:',
        value: list[0].pp,
      },
      {
        text: 'Priority:',
        value: list[0].priority,
      },
      {
        text: 'Type: ',
        value: type.name,
      },
    ];

    return (
      <LayoutItem
        information={information}
        name={list[0].name}
        title="Information pokemon's move"
        titleDescription={'Move damage class:'.concat(' ', name)}
        image="/fight_icon-icons.com_67557.png"
        alt="pokeballs"
        descriptions={moveDescription[0].description || ''}
      />
    );
  };

  return renderInformation();
};

export default Move;
