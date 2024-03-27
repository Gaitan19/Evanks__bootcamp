import PropTypes from 'prop-types';
import Banner from '../Banner';
import Layout from '../Layout';
import { terms } from '@/constants/terms';

const PolicyTerms = (props) => {
  const { headPage, title, page } = props;

  const renderTermsText = (texts, id) =>
    texts.map((text) => (
      <p className="Terms-text" key={id}>
        {text}
      </p>
    ));

  const renderTerms = () =>
    terms.map((term) => (
      <div className="Terms-item" key={term.id}>
        <h4 className="Terms-titles">{term.title}</h4>
        {renderTermsText(term.texts, term.id)}
      </div>
    ));

  return (
    <Layout headPageTitle={headPage}>
      <Banner title={title} page={page} />
      <div className="Food">
        <div className="Food-content Terms-content">{renderTerms()}</div>
      </div>
    </Layout>
  );
};

PolicyTerms.propTypes = {
  headPage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default PolicyTerms;
