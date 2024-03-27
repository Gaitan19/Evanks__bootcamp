import Banner from '../Banner';
import Layout from '../Layout';
import ContactForm from './ContactForm';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <Layout headPageTitle="Contact">
      <Banner title="Contact" page="Contact" />
      <ContactUs />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
