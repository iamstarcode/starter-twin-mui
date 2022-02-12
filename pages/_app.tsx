import { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme'

import Head from 'next/head';


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache, }: MyAppProps) => (
  <>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles />{/* Tailwind CSS */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </>
)

export default App
