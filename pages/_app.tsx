import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/poly';
import '@fontsource/montserrat';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
