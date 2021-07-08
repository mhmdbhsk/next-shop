import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import theme from '@theme';
import FontFace from 'theme/fonts';
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import MobileSplashScreen from '../components/SplashScreen/MobileSplashScreen';

function App({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <PersistGate
      persistor={(store as any).persistor}
      loading={<MobileSplashScreen />}
    >
      <ChakraProvider theme={theme}>
        <NextNprogress
          color='#48BB78'
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <FontFace />
      </ChakraProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
