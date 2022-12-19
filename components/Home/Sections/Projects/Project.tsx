import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import ChakraLink from '@components/ChakraLink'
import placeholder from '@public/app-lettergo.png'
import Image from '@components/Image'
import NextImage from 'next/image'

const Project = (props) => {
  const { type, description, title, children, linkText, ...rest } = props

  return (
    <Flex direction={{ base: 'column-reverse', md: `${type === 'even' ? 'row-reverse' : 'row'}` }} justify='center' align='center' gap={{ base: 8, md: 4 }}>
      {/* Project description */}
      <Flex direction='column' justify='space-around' flexBasis='66.6%' gap='8'>
        <Flex direction='column'>
          {/* Title */}
          <Heading fontSize='3xl' mb={6} alignSelf={{ base: 'center', md: `${type === 'even' ? 'end' : 'start'}` }}>
            {title}
          </Heading>
          {/* Children (Paragraph and build with) */}
          <Flex direction='column' fontWeight='normal' fontSize='md' gap='4' textAlign={{ base: 'center', md: `${type === 'even' ? 'right' : 'left'}` }}>
            {props.children}
          </Flex>
        </Flex>
        {/* Live Demo link */}
        <Flex fontSize='xl' fontWeight='bold' direction='column' textAlign={{ base: 'center', md: `${type === 'even' ? 'right' : 'left'}` }}>
          <ChakraLink {...rest}>{linkText}</ChakraLink>
        </Flex>
      </Flex>
      {/* Project image */}
      <Flex borderColor='whiteAlpha.800' borderWidth={1} borderStyle='solid' justify='space-between' align='space-between'>
        <Image src={placeholder} alt='' />
      </Flex>
    </Flex>
  )
}

export default Project
