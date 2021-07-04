import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import theme from '@theme';
import FontFace from 'theme/fonts';
import Container from '@components/Container';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color="#48BB78"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <FontFace />
    </ChakraProvider>
  );
}

export default MyApp;
