import '@/styles/css/main.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { Alert } from '@/components/Alert';
import store from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
      <Alert />
    </>
  );
}
