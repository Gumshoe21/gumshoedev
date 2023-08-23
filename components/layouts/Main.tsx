import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '@components/Navbar';

function Main({ children, router }) {
	return (
		<Box as={'main'} pb={'8'}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Matthew Smilansky - gumshoe.dev</title>
			</Head>
			<Navbar router={router.asPath} />
			<Container maxW='container.lg' pt={14}>
				{children}
			</Container>
		</Box>
	);
}

export default Main;
