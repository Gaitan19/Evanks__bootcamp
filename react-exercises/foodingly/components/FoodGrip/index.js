import Banner from '../Banner';
import Layout from '../Layout';
import FoodFound from './FoodFound';

const FoodGrip = () => {
  return (
    <Layout headPageTitle="Food grip">
      <Banner title="Food grip" page="Food grip" />
      <FoodFound />
    </Layout>
  );
};

export default FoodGrip;
