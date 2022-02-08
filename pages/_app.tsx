// style
import '../styles/globals.scss';
// next.js
import type { AppProps } from 'next/app';
// redux
import store from '../store/store';
import { Provider } from 'react-redux';
// Next Auth
import { SessionProvider } from 'next-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
