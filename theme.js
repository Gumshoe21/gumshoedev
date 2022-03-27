// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { redirect } from 'next/dist/server/api-utils';

// 2. Add your color mode config
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box'
      }
    }
  },
  components: {
    Link: {
      baseStyle: {}
    }
  }
});

export default theme;
