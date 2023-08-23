import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/Main';
import theme from '../theme';
import { AnimatePresence } from 'framer-motion';
import Fonts from '@components/Fonts';
function App({ Component, pageProps, router }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Fonts />
				<Layout router={router}>
					<AnimatePresence exitBeforeEnter={true} initial={true}>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default App; 
