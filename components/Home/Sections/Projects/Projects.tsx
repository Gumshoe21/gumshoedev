import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import placeholder from '@public/placeholder300x250.png'
import Image from '@components/Image'
import ProjectEven from '@projects/ProjectEven'
import ProjectOdd from '@projects/ProjectOdd'

const Projects = () => {
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  return (
    <Flex direction='column' py={20}>
      <Flex direction='column' rowGap='4.8rem' bg={heroBgColor} transitionDuration='200ms'>
        <Flex direction='column' align='center' justify='center'>
          <Heading textAlign='center' fontSize='2.0rem' letterSpacing='.3rem' textTransform='uppercase'>
            My Work
          </Heading>
        </Flex>
        {/* Begin projects */}
        <Flex direction='column' align='center' justify='center' gap='3.2rem' fontFamily='Courier New'>
          {/* Project 1 */}
          <ProjectOdd title='12 Hour Study' href='#' linkText='Live Demo'>
            <Text >
              A{' '}
              <em>
                <strong>Pomodoro timer app</strong>
              </em>{' '}
              aimed at boosting productivity. The app generates reports based on your study habits, and gives you an idea of how much studying you&apos;re doing
              over time. The app was inspired by the &quot;study with me&quot; trend of videos on YouTube, which often feature an on-screen Pomodoro timer.
            </Text>
            <Text fontSize='md'>Built with Next.js, Express.js, MongoDB, React.js, Nivo, and Chakra UI.</Text>
          </ProjectOdd>
          {/* End Project 1 */}
          {/* Project 2 */}
          <ProjectEven title='LetterGo' href='#' linkText='Live Demo'>
            <Text fontSize='md' textAlign='right'>
              A{' '}
              <em>
                <strong>word game</strong>
              </em>{' '}
              that challenges users form as many heterograms as possible before running out of time. Allows for OAuth 2 login via Google and GitHub. Features a
              leaderboard listing the highest scores.
            </Text>
            <Text textAlign='right' fontSize='md'>
              Built with Next.js, Prisma, PostgreSQL, and Tailwind CSS/UI.
            </Text>
          </ProjectEven>
          {/* End project 2 */}
          {/* Project 3 */}

          <ProjectOdd title='The Grind' href='#' linkText='Live Demo'>
            <Text>
              A{' '}
              <em>
                <strong>website for a fictional coffee shop.</strong>
              </em>{' '}
              Features an online ordering system with e-commerce components.
            </Text>
            <Text>Built with Next.js and Tailwind CSS/UI.</Text>
          </ProjectOdd>
          {/* End Project 3*/}
        </Flex>
        {/* End Projects */}
      </Flex>
    </Flex>
  )
}

export default Projects
