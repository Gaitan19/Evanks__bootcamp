import Banner from '../Banner';
import TextButton from '../Home/TextButton';
import Layout from '../Layout';
import ChefsCard from '../Home/ChefsCard';
import { chefs } from '@/constants/chefsList';

const ChefsExperienced = () => {
  const renderChefs = () =>
    chefs.map((chef) => <ChefsCard chefInformation={chef} key={chef.id} />);

  return (
    <Layout headPageTitle="Chefs-Foodingly">
      <Banner title="Chefs" page="Chefs" />
      <TextButton
        customClass="Reservation"
        text="Meet with our experienced chefs members"
        title="Chefs"
      >
        <div className="Chefs">{renderChefs()}</div>
        <div className="Chefs">{renderChefs()}</div>
      </TextButton>
    </Layout>
  );
};

export default ChefsExperienced;
