// style
import '../styles/globals.scss';
// next.js
import type { AppProps } from 'next/app';
// redux
import store from '../store/store';
import { Provider } from 'react-redux';
// Next Auth
import { SessionProvider } from 'next-auth/react';
// define BaseURL with axios
import axios from 'axios';
axios.defaults.baseURL = 'https://gitlab.com/api/v4';

// =======================================================

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
