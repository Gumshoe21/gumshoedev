import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import ChakraLink from '@components/ChakraLink'
import placeholder from '@public/placeholder300x250.png'
import Image from '@components/Image'
import NextImage from 'next/image'

const ProjectEven = (props) => {
  const { description, title, children, linkText, ...rest } = props

  return (
    <Flex direction={{ base: 'column-reverse', md: 'row-reverse' }} justify='space-between' align='center' gap={{ base: 8, md: 0 }}>
      {/* Project description */}
      <Flex direction='column' flexBasis='66.6%'>
        <Flex direction='column'>
          <Heading fontSize='2xl' mb='2' alignSelf={{ base: 'center', md: 'end' }}>
            {title}
          </Heading>
          <Flex direction='column' fontSize='md' gap='2'>
            {props.children}
            <Flex fontSize='lg' direction='column' align='center'>
              <ChakraLink {...rest}>{linkText}</ChakraLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Project image */}
      <Flex>
        <Image src={placeholder} alt='' />
      </Flex>
    </Flex>
  )
}

export default ProjectEven
