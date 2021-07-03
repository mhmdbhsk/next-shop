import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import theme from '@theme';
import FontFace from 'theme/fonts';
import Container from '@components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <FontFace />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
