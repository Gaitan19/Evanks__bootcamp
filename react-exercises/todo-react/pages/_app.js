import '@/styles/globals.css';
import { Alert } from '@/components/Alert';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Alert />
    </>
  );
}
