// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { redirect } from 'next/dist/server/api-utils';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Montserrat, open-sans'
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode('whiteAlpha.900', 'gray.800')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
        padding: '0',
        margin: '0',
        boxSizing: 'border-box'
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column'
      }
    })
  },

  components: {
    Link: {
      baseStyle: {}
    },
    Container: {
      baseStyle: {
        padding: '5rem'
      }
    }
  }
});

export default theme;
