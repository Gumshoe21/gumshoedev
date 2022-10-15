import { Flex, Box, Heading, useColorModeValue } from '@chakra-ui/react';

const Projects = () => {
	const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
	return (
		<Flex direction="column" py={20}>
			<Flex
				direction="column"
				rowGap="4.8rem"
				bg={heroBgColor}
				transitionDuration="200ms"
			>
				<Flex direction="column" align="center" justify="center">
					<Heading
						textAlign="center"
						fontSize="2.0rem"
						letterSpacing=".3rem"
						textTransform="uppercase"
					>
						My Work
					</Heading>
				</Flex>
				<Flex
					fontSize="6xl"
					textAlign="center"
					direction={{ md: 'row', base: 'column' }}
					align="center"
					justify="center"
					gap="3.2rem"
					fontFamily="oCourier New"
				>
					COMING SOON!
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Projects;
