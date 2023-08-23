import React from 'react';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import ArticleLayout from '../components/layouts/Article';
import Section from '../components/section';
// import { WorkGridItem } from '../components/grid-item';
import thumb12HourStudy from '../public/app-12hourstudy.jpg';
import thumbLetterGo from '../public/app-lettergo.jpg';
import thumbTheGrind from '../public/app-thegrind.jpg';
import { WorkGridItem } from '../components/GridItem';
function Projects() {
	return (
		<ArticleLayout title='Works'>
			<Container maxW='container.sm'>
				<Heading as='h3' fontSize={20} mb={4} padding={0} variant='section-title'>
					Projects
				</Heading>

				<SimpleGrid columns={[1, null, 3]} gap={6}>
					<Section>
						<WorkGridItem id='#12hourstudy' title='12 Hour Study' thumbnail={thumb12HourStudy}>
							<br />
							<>
								{' '}
								A&nbsp;<strong>Pomodoro timer app</strong>&nbsp; aimed at boosting productivity. The app generates
								reports based on your study habits, and gives you an idea of how much studying you&apos;re doing over
								time. The app was inspired by the &quot;study with me&quot; trend of videos on YouTube, which often
								feature an on-screen Pomodoro timer.
								<br />
								<br />
								Built with Next.js, Express.js, MongoDB, React.js, Nivo, and Chakra UI.
							</>
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='#lettergo' title='LetterGo' thumbnail={thumbLetterGo}>
							<br />
							<>
								{' '}
								A&nbsp;<strong>word game</strong>&nbsp;that challenges users to form as many heterograms as possible
								before running out of time. Allows for OAuth 2 login via Google and GitHub. Features a leaderboard
								listing the highest scores.
								<br />
								<br />
								Built with Next.js, NextAuth, Prisma, PostgreSQL, and Tailwind CSS/UI.
							</>
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='#thegrind' title='The Grind' thumbnail={thumbTheGrind}>
							<br />
							<>
								{' '}
								A&nbsp;<strong>mock website for a fictional coffee shop.</strong>&nbsp; Features an online ordering
								system with e-commerce components.
								<br />
								<br />
								Built with Next.js, NextAuth, MongoDB, and Tailwind CSS/UI.
							</>
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</ArticleLayout>
	);
}

export default Projects;
//export { getServerSideProps } from '../components/chakra';
