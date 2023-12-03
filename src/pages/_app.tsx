import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import '@/styles/_app.css';
import '@/styles/globals.css';

import TransitionEffect from '@/components/common/TransitionEffect';
import FixedComponents from '@/components/fixedComponents';
import Layout from '@/components/layout/Layout';

import store, { persistor } from '@/store';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <TransitionEffect>
              <FixedComponents />
              <Component {...pageProps} />
            </TransitionEffect>
          </Layout>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
