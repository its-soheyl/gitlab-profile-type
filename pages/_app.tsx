import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from '../store/store';

axios.defaults.baseURL = 'https://gitlab.com/api/v4';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
