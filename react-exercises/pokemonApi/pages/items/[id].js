import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getVariablesItem } from '@/constants/queryVariables';
import { getItemInformation } from '@/graphql/Items';
import LayoutItem from '@/components/LayoutItem';

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(
    getItemInformation,
    getVariablesItem(id),
  );

  const renderInformation = () => {
    if (loading) return <span>loading ...</span>;
    if (error) return <span>{error.message}</span>;

    const { list } = data;

    const description =
      list[0].effectName[0] || "this item doesn't has description";

    const information = [
      {
        text: 'Item#',
        value: list[0].id,
      },
      {
        text: 'Coast:$',
        value: list[0].cost,
      },
      {
        text: 'Category:',
        value: list[0].category.name,
      },
    ];

    return (
      <LayoutItem
        information={information}
        name={list[0].name}
        title="Information item"
        titleDescription="Item effect"
        descriptions={[description.effect] || [description]}
        image="/if-item-bag.png"
        alt="pokemon bag"
      />
    );
  };

  return renderInformation();
};

export default Item;
