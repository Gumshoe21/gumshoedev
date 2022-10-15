import React, { Fragment } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Sections/Hero';
import AboutMe from '../components/Home/Sections/AboutMe';
import Technologies from '../components/Home/Sections/Technologies';
import Projects from '../components/Home/Sections/Projects';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Box>
				<Flex
					direction="column"
					align="center"
					justify="center"
					maxW="6xl"
					mx="auto"
					px="6"
				>
					<Hero />
					<AboutMe />
					<Technologies />
					<Projects />
				</Flex>
			</Box>
		</Fragment>
	);
};

export default Home;
