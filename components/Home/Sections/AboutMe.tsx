import { Link, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Image from '@components/Image'
import placeholder from '@public/placeholder400x400.png'
import NextLink from 'next/link'

const AboutMe = () => {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300')
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex direction='column' py={20}>
      <Flex direction='column' rowGap='4.8rem' bg={heroBgColor} transitionDuration='200ms'>
        <Flex direction='column' align='center' justify='center'>
          <Heading textAlign='center' fontSize='2.0rem' letterSpacing='.3rem' textTransform='uppercase'>
            About Me
          </Heading>
        </Flex>
        <Flex fontSize='md' direction={{ md: 'row', base: 'column' }} align='center' justify='space-between' gap='20'>
          <Flex flexBasis='33.3%'>
            <Image src={placeholder} alt='placeholder photo, 400x400px' />
          </Flex>
          <Flex gap={4} flexBasis='66.6%' direction='column' fontWeight='600' fontFamily='Montserrat'>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born in Los Angeles&#44; California and moved to Israel with my family at a very young age
              (!כן, אני מדבר עברית). I then moved back to the United States in late childhood&#44; where I&apos;ve been living ever since.
            </Text>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;ve always had an affinity for technology. When I was 4 years old&#44; my parents purchased
              a Windows 3.1 PC&#44; and I was immediately hooked.
            </Text>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I graduated from the University of California&#44; Los Angeles (UCLA) in 2014 with a Bachelor of
              Arts degree in English Language and Literature. I&apos;ve always been a big reader and enjoy writing from time to time (check out my{' '}
              <NextLink href={'blog.gumshoe.dev'} passHref>
                <Link>blog</Link>
              </NextLink>
              ).
            </Text>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After graduating college&#44; I started developing an interest in computer programming and began
              learning how to code websites and web applications. And here I am now!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutMe
