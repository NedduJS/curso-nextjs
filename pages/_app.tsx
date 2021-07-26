// import App from 'next/app'
import { Provider } from 'react-redux';

import Layout from '@components/Layout';
import generateStore from '../redux/store';

const store = generateStore();

function MyApp({ Component, pageProps }) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
