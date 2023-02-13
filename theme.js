// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Poly, open-sans',
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode('whiteAlpha.900', 'gray.800')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
      },
      '#__next': {
        width: '100vw',
      },
      html: {
        'overflow-x': 'hidden',
      },
      '.progress-bar': {
        position: 'fixed',
        top: '72px',
        left: 0,
        right: 0,
        height: '10px',
        bg: mode('blue.300', 'purple.300')(props),
        'transform-origin': '0%',
        'z-index': 2,
      },
    }),
  },

  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('blue.600', 'purple.300')(props),
      }),
    },
    Container: {
      baseStyle: {
        padding: '5rem',
      },
    },
  },
})

export default theme
