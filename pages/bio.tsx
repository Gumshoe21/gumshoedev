import { Container, Heading } from '@chakra-ui/react';
import ArticleLayout from '@components/layouts/Article';
import Paragraph from '@components/Paragraph';
import Section from '@components/Section';

function Bio() {
	return (
		<Container maxW='container.sm'>
			{' '}
			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					About Me
				</Heading>
				<Paragraph>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born in Los Angeles&#44; California and moved to Israel
					with my family at a very young age. I then moved back to the United States in late childhood&#44; where
					I&apos;ve been living ever since.{' '}
					<Paragraph>
						I&apos;ve always had an interest in technology. When I was 4 years old&#44; my parents purchased a computer
						running Microsoft Windows 3.1 PC&#44; and I was immediately hooked.
					</Paragraph>
				</Paragraph>
				<Paragraph>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After graduating university&#44; I started developing an
					interest in computer programming and began learning how to code websites and web applications. And here I am
					now!
				</Paragraph>
			</Section>
		</Container>
	);
}
export default Bio;
