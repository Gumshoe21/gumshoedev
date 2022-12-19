import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '@fontsource/poly'
import '@fontsource/montserrat'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>gumshoe.dev</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Personal website for Matthew Smilansky.' />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
