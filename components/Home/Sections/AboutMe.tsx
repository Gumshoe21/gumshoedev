import { Link, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Image from '@components/Image'
import placeholder from '@public/placeholder400x400.png'
import NextLink from 'next/link'
import SectionHeading from '@home/Sections/SectionHeading'

const AboutMe = () => {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300')
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex id='about' direction='column' py={20}>
      <Flex direction='column' gap={10} bg={heroBgColor} transitionDuration='200ms'>
        <Flex direction='column' align='center' justify='center'>
          <SectionHeading>About Me</SectionHeading>
        </Flex>
        <Flex fontSize='md' px={{ md: 20 }} direction={{ md: 'row', base: 'column' }} align='center' justify='space-between' gap={{ base: 8, md: 20 }}>
          <Flex gap={4} textAlign='center' direction='column' fontSize='lg'>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was born in Los Angeles&#44; California and moved to Israel with my family at a very young age.
              I then moved back to the United States in late childhood&#44; where I&apos;ve been living ever since.
            </Text>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;ve always had an interest in technology. When I was 4 years old&#44; my parents purchased a
              computer running Microsoft Windows 3.1 PC&#44; and I was immediately hooked.
            </Text>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After graduating university&#44; I started developing an interest in computer programming and
              began learning how to code websites and web applications. And here I am now!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutMe
