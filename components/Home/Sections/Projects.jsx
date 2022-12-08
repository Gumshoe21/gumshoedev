import { Flex, Box, Text, Link, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import placeholder from '@public/placeholder300x250.png'
import Image from '@components/Image'

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
          {/************ Individual project container 1 ****************/}
          <Flex direction={{ base: 'column-reverse', md: 'row' }} justify='start' align='center' gap={{ base: 8, md: 0 }}>
            {/* Project description */}
            <Flex direction='column' px='20' flexBasis='66.6%'>
              <Flex direction='column'>
                <Heading fontSize='2xl' mb='2' alignSelf={{ base: 'center', md: 'start' }}>
                  12 Hour Study
                </Heading>
                <Text fontSize='md' textAlign='left'>
                  A Pomodoro timer app aimed at boosting productivity. The app generates reports based on your study habits, and gives you an idea of how much
                  studying you&apos;re doing over time. The app was inspired by the &quot;study with me&quot; trend of videos on YouTube, which often feature an
                  on-screen Pomodoro timer.
                </Text>
                <br />
                <Text fontSize='md'>Built with Next.js, Express.js, MongoDB, React.js, Nivo, and Chakra UI.</Text>
              </Flex>
              <br />
              <Flex fontSize='lg' direction='column' align='center'>
                <NextLink href='#' passHref>
                  <Link>Live Demo</Link>
                </NextLink>
              </Flex>
            </Flex>
            {/* Project image */}
            <Flex>
              <Image src={placeholder} alt='' />
            </Flex>
          </Flex>
          {/*********** End project 1 ************/}
          {/************ Individual project container 2 ****************/}
          <Flex direction={{ base: 'column-reverse', md: 'row-reverse' }} justify='end' align='center' gap={{ base: 8, md: 0 }}>
            {/* Project description */}
            <Flex direction='column' px='20' flexBasis='66.6%'>
              <Flex direction='column'>
                <Heading fontSize='2xl' mb='2' alignSelf={{ base: 'center', md: 'end' }}>
                  LetterGo
                </Heading>
                <Text fontSize='md' textAlign='right'>
                  A word-game that challenges users form as many heterograms as possible before running out of time. Allows for OAuth 2 login via Google and
                  GitHub. Features a leaderboard listing the highest scores.
                </Text>
                <br />
                <Text fontSize='md'>Built with Next.js, Prisma, PostgreSQL, and Tailwind CSS.</Text>
              </Flex>
              <br />
              <Flex fontSize='lg' direction='column' align='center'>
                <NextLink href='#' passHref>
                  <Link>Live Demo</Link>
                </NextLink>
              </Flex>
            </Flex>
            {/* Project image */}
            <Flex>
              <Image src={placeholder} alt='' />
            </Flex>
          </Flex>
          {/*********** End project 2 ************/}
          {/************ Individual project container 3 ****************/}
          <Flex direction={{ base: 'column-reverse', md: 'row' }} justify='start' align='center' gap={{ base: 8, md: 0 }}>
            {/* Project description */}
            <Flex direction='column' px='20' flexBasis='66.6%'>
              <Flex direction='column'>
                <Heading fontSize='2xl' mb='2' alignSelf={{ base: 'center', md: 'start' }}>
                  The Grind
                </Heading>
                <Text fontSize='md'>
                  A word-game that challenges users form as many heterograms as possible before the timer expires. A Pomodoro timer app aimed at boosting
                  productivity. The app generates reports based on your study habits, and gives you an idea of how much studying you&apos;re doing over time.
                  The app was inspired by the &quot;study with me&quot; trend of videos on YouTube, which often feature an on-screen Pomodoro timer.
                </Text>
                <br />
                <Text fontSize='md'></Text>
              </Flex>
              <br />
              <Flex fontSize='lg' direction='column' align='center'>
                <NextLink href='#' passHref>
                  <Link>Live Demo</Link>
                </NextLink>
              </Flex>
            </Flex>
            {/* Project image */}
            <Flex>
              <Image src={placeholder} alt='' />
            </Flex>
          </Flex>
          {/*********** End project 3 ************/}
        </Flex>
        {/* End projects */}
      </Flex>
    </Flex>
  )
}

export default Projects
