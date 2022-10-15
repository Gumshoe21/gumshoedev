import { useColorModeValue, Box, Flex, Heading, Link } from '@chakra-ui/react';
import profilePic from '../../../public/gumshoe.png';

import SocialButton from '../SocialButton';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from '../../Image';
const Hero = () => {
	const section1BgColor = useColorModeValue('orange.100', 'gray.600');
	const profilePicShadow = useColorModeValue(
		'0px 10px 10px -12px #000',
		'0px 10px 10px -12px #fff',
	);
	const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
	return (
		<Flex
			align="center"
			justify="start"
			flexDirection="column"
			height="100vh"
			bg={heroBgColor}
			transitionDuration="200ms"
			pt={40}
			pb={20}
			textAlign="center"
		>
			<Box alignSelf="center" borderRadius="50%">
				<Image
					borderRadius="50%"
					src={profilePic}
					boxShadow={profilePicShadow}
					transform="translateY(-10px)"
					alt="Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev"
				/>
			</Box>
			<Heading
				as="h1"
				fontSize={{ base: '6xl', md: '8xl' }}
				fontWeight="600"
				letterSpacing="1px"
				py={2}
			>
				Matthew Smilansky
			</Heading>
			<Heading
				fontSize={{ base: '2xl', md: '4xl' }}
				fontFamily="Montserrat"
				fontWeight="600"
				textTransform="uppercase"
			>
				Web Developer
			</Heading>
			<Heading
				fontSize={{ base: 'lg', md: '2xl' }}
				fontFamily="Montserrat"
				pt={8}
				pb={4}
			>
				I also like to write &mdash; check out{' '}
				<Link href="https://blog.gumshoe.dev">my ramblings.</Link>
			</Heading>
			<Flex columnGap={6} py={2}>
				<SocialButton svg={FaEnvelope} href="mailto:msmilansky@gmail.com" />
				<SocialButton svg={FaTwitter} href="https://twitter.com/Gumshoe21" />
				<SocialButton
					svg={FaLinkedin}
					href="https://linkedin.com/in/matthew-smilansky"
				/>
				<SocialButton svg={FaGithub} href="https://github.com/Gumshoe21" />
			</Flex>
		</Flex>
	);
};

export default Hero;
