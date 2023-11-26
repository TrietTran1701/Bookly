import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/_app.css';

import TransitionEffect from '@/components/common/TransitionEffect';
import Layout from '@/components/layout/Layout';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TransitionEffect>
        <Component {...pageProps} />
      </TransitionEffect>
    </Layout>
  );
}

export default MyApp;
