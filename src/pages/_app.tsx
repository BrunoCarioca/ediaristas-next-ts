import { ThemeProvider } from '@mui/material';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from 'ui/components/surfaces/Footer/Footer';
import Header from 'ui/components/surfaces/Header/Header';
import { AppContainer } from 'ui/styles/pages/_app.styled';
import theme from 'ui/themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>e-diaristas {pageProps.title && ` - ${pageProps.title}`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
