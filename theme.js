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
        width: '100vw',
        'overflow-x': 'hidden',
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
