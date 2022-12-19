import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <>
        <Html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.1' />
          <meta name='description' content='Personal website for Matthew Smilansky.' />
        </Head>

        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
</Html>
      </>
    )
  }
}
