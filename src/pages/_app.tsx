import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import '@/styles/_app.css';
import '@/styles/globals.css';

import TransitionEffect from '@/components/common/TransitionEffect';
import FixedComponents from '@/components/fixedComponents';
import Layout from '@/components/layout/Layout';

import store, { persistor } from '@/store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <TransitionEffect>
            <FixedComponents />
            <Component {...pageProps} />
          </TransitionEffect>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
