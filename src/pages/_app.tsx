import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import theme from '@theme';
import FontFace from 'theme/fonts';
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '@store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MobileSplashScreen from '@components/SplashScreen/MobileSplashScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore((state) => state);

  return (
    <PersistGate loading={<MobileSplashScreen />} persistor={store.__persistor}>
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

export default wrapper.withRedux(MyApp);
