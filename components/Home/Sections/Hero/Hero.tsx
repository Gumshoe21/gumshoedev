import {
	keyframes,
	useColorModeValue,
	Box,
	Flex,
	Heading,
	Link,
} from "@chakra-ui/react";
import profilePic from "@public/headshot.jpg";

import SocialButton from "./SocialButton";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import Image from '@components/Image';
import SectionLayout from '@components/Layouts/SectionLayout';
const Hero = () => {
	const section1BgColor = useColorModeValue('orange.100', 'gray.600');
	const profilePicShadow = useColorModeValue('0px 12px 27px -12px #000', '0px 12px 27px -10px #fff');
	const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');

	const fadeIn = (dir: string): string => {
		return keyframes`100% { ${dir}:0; }`;
	};

	return (
		<SectionLayout>
			<Flex
				id='hero'
				align='center'
				justify='center'
				flexDirection='column'
				height='100vh'
				transitionDuration='200ms'
				pt={40}
				pb={20}
				textAlign='center'
				position='relative'
			>
				<Box
					alignSelf='center'
					borderRadius='50%'
					position='relative'
					top='-100%'
					sx={{
						animation: `1000ms ${fadeIn('top')} forwards`,
					}}
				>
					<img
						id='arlen'
						src='headshot.jpg'
						alt='Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev'
					/>
				</Box>
				<Heading
					as='h1'
					fontSize={{ base: '3xl', md: '5xl' }}
					fontWeight='600'
					letterSpacing='1px'
					py={2}
					position='relative'
					right='-100%'
					sx={{
						animation: `1000ms ${fadeIn('right')} forwards`,
						animationDelay: '200ms',
					}}
				>
					Matthew Smilansky
				</Heading>
				<Heading
					fontSize={{ base: 'lg', md: 'xl' }}
					fontFamily='Montserrat'
					fontWeight='600'
					position='relative'
					left='-100%'
					sx={{
						animation: `1000ms ${fadeIn('left')} forwards`,
						'animation-delay': '200ms',
					}}
				>
					Software Engineer
				</Heading>
				<Flex
					columnGap={2}
					py={2}
					bottom='-100%'
					position='relative'
					sx={{
						animation: `1s ${fadeIn('bottom')} forwards`,
					}}
				>
					<SocialButton icon={<FaFilePdf size={26} />} href='/resume.pdf' />
					<SocialButton icon={<FaEnvelope size={26} />} href='mailto:msmilansky@gmail.com' />
					<SocialButton icon={<FaXTwitter size={26} />} href='https://twitter.com/gumshoedev' />
					<SocialButton icon={<FaLinkedin size={26} />} href='https://linkedin.com/in/matthew-smilansky' />
					<SocialButton icon={<FaGithub size={26} />} href='https://github.com/Gumshoe21' />
				</Flex>
			</Flex>
		</SectionLayout>
	);
};

export default Hero;
