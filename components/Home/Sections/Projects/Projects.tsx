import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import placeholder from '@public/placeholder300x250.png'
import Image from '@components/Image'
import Project from '@projects/Project'
import SectionHeading from '@home/Sections/SectionHeading'
import thumbnailLetterGo from '@public/app-lettergo.png'
import thumbnail12HourStudy from '@public/app-12hourstudy.png'
import thumbnailTheGrind from '@public/app-thegrind.png'
import SectionLayout from '@components/Layouts/SectionLayout';
const Projects = () => {
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
		<SectionLayout>
			<Flex id='projects' direction='column' py={32}>
				<Flex direction='column' gap={24} bg={heroBgColor} transitionDuration='200ms'>
					<Flex direction='column' align='center' justify='center'>
						<SectionHeading>Projects</SectionHeading>
					</Flex>
					{/* Begin projects */}
					<Flex direction='column' align='center' justify='center' gap='4.8rem'>
						{/* Project 1 */}
						<Project
							githubHref={'https://github.com/Gumshoe21/12-Hour-Study'}
							title='12 Hour Study'
							href='https://12hourstudy.netlify.app'
							thumbnailSrc={thumbnail12HourStudy}
							linkText='Live Demo'
							type='odd'
						>
							<Text>
								A&nbsp;<strong>Pomodoro timer app</strong>&nbsp; aimed at boosting productivity. The app generates
								reports based on your study habits, and gives you an idea of how much studying you&apos;re doing over
								time. The app was inspired by the &quot;study with me&quot; trend of videos on YouTube, which often
								feature an on-screen Pomodoro timer.
							</Text>
							<Text
								as='i'
								fontWeight='500'
								textAlign={{ base: 'center', md: 'left' }}
								fontSize='md'
								textDecoration='italic'
							>
								Built with Next.js, Express.js, MongoDB, React.js, Nivo, and Chakra UI.
							</Text>
						</Project>
						{/* End Project 1 */}
						{/* Project 2 */}
						<Project
							githubHref={'https://github.com/Gumshoe21/lettergo'}
							title='LetterGo'
							href='https://lettergo.vercel.app'
							thumbnailSrc={thumbnailLetterGo}
							linkText='Live Demo'
							type='even'
						>
							<Text>
								A&nbsp;<strong>word game</strong>&nbsp;that challenges users to form as many heterograms as possible
								before running out of time. Allows for OAuth 2 login via Google and GitHub. Features a leaderboard
								listing the highest scores.
							</Text>
							<Text as='i' fontWeight='500' textAlign={{ base: 'center', md: 'right' }} fontSize='md'>
								Built with Next.js, NextAuth, Prisma, PostgreSQL, and Tailwind CSS/UI.
							</Text>
						</Project>
						{/* End project 2 */}
						{/* Project 3 */}

						<Project
							githubHref={'https://github.com/Gumshoe21/thegrind'}
							title='The Grind'
							href='https://thegrind.vercel.app'
							thumbnailSrc={thumbnailTheGrind}
							linkText='Live Demo'
							type='odd'
						>
							<Text>
								A&nbsp;<strong>mock website for a fictional coffee shop.</strong>&nbsp; Features an online ordering
								system with e-commerce components.
							</Text>
							<Text
								as='i'
								fontWeight='500'
								textAlign={{ base: 'center', md: 'left' }}
								fontSize='md'
								textDecoration='italic'
							>
								Built with Next.js, NextAuth, MongoDB, and Tailwind CSS/UI.
							</Text>
						</Project>
						{/* End Project 3*/}
					</Flex>
					{/* End Projects */}
				</Flex>
			</Flex>
		</SectionLayout>
	);
}

export default Projects
