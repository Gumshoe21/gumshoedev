import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat/500.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
