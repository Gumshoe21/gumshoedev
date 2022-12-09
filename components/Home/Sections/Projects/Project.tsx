import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import ChakraLink from '@components/ChakraLink'
import placeholder from '@public/app-lettergo.png'
import Image from '@components/Image'
import NextImage from 'next/image'

const Project = (props) => {
  const { type, description, title, children, linkText, ...rest } = props

  return (
    <Flex
      direction={{ base: 'column-reverse', md: `${type === 'even' ? 'row-reverse' : 'row'}` }}
      justify='center'
      align='center'
      gap={{ base: 8, md: 4 }}
    >
      {/* Project description */}
      <Flex direction='column' justify='space-around' flexBasis='66.6%'>
        <Flex direction='column' gap='1'>
          <Heading fontSize='2xl' mb='2' alignSelf={{ base: 'center', md: `${type === 'even' ? 'end' : 'start'}` }}>
            {title}
          </Heading>
          <Flex direction='column' fontSize='md' gap='2'>
            {props.children}
          </Flex>
        </Flex>
        <Flex fontSize='xl' fontWeight='bold' direction='column' align='center'>
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
