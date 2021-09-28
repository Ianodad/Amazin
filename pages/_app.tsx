/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';

// import '../styles/tailwind.css'
import { wrapper } from '../src/redux/store';
import theme from '../src/utils/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
