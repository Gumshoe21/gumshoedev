import Image from 'next/image';
import { Container, Heading, Box, chakra, Flex } from '@chakra-ui/react';
import ArticleLayout from '../components/layouts/Article';
import profileImg from '@public/headshot.jpg';
const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});
const Page = () => {
	return (
		<ArticleLayout title='Home'>
			<Container maxW='container.sm'>
				<Box display={{ md: 'flex' }} h='100%'>
					<Flex flexDirection='column' flexGrow={1}>
						<Box>
							<Heading as='h2' variant='page-title' letterSpacing={'tighter'}>
								Matthew Smilansky
							</Heading>
							<p>Software Engineer · Technical Writer · Hobbyist Game Dev</p>
						</Box>
					</Flex>
				</Box>
			</Container>
		</ArticleLayout>
	);
};

export default Page;
