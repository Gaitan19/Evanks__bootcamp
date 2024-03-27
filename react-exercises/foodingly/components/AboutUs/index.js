import Banner from '../Banner';
import Chefs from '../Home/Chefs';
import Layout from '../Layout';
import Testimonials from '../Testimonials';
import Best from './Best';
import CounterArea from './CounterArea';
import ServicesOffer from './ServicesOffer';

const AboutUs = () => {
  return (
    <Layout headPageTitle="About us">
      <Banner title="About Us" page="About Us" />
      <Best />
      <ServicesOffer />
      <Chefs />
      <CounterArea />
      <Testimonials />
    </Layout>
  );
};

export default AboutUs;
