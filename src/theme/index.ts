import {
  extendTheme,
  theme as chakraTheme,
  ThemeOverride,
} from '@chakra-ui/react';

import colors from './colors';

const theme: typeof chakraTheme = extendTheme(<ThemeOverride>{
  colors,
  fonts: {
    heading: 'Gilroy Bold',
    body: 'Inter',
    g_regular: 'Gilroy Regular',
    g_semibold: 'Gilroy Semi Bold',
  },
  sizes: {
    container: {
      xs: '444px',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Gilroy Regular',
      },
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
});

export default theme;
