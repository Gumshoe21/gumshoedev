import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import ChakraLink from '@components/ChakraLink'
import Image from '@components/Image'
import NextImage from 'next/image'
import type { StaticImageData } from 'next/image'

interface IProject {
  type: string
  title: string
  linkText: string
  href: string
  thumbnailSrc: StaticImageData
  children: JSX.Element[]
}

const Project = (props: IProject) => {
  const { type, title, linkText, thumbnailSrc, children, href, githubHref, ...rest } = props

  const projectShadow = useColorModeValue('0px 13px 37px -12px #000', '0')

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
            {children}
          </Flex>
        </Flex>
        {/* Live Demo link */}
        <Flex fontSize='md' fontWeight='bold' direction='column' textAlign={{ base: 'center', md: `${type === 'even' ? 'right' : 'left'}` }}>
          <ChakraLink href={href} {...rest}>
            {linkText}
          </ChakraLink>
          <ChakraLink href={githubHref} {...rest}>
            GitHub
          </ChakraLink>
        </Flex>
      </Flex>
      {/* Project image */}

      <ChakraLink href={href}>
        <Flex _hover={{ transform: 'translateY(-10px)' }} transitionDuration='200ms' boxShadow={projectShadow} justify='space-between' align='space-between'>
          <Image src={thumbnailSrc} alt='' />
        </Flex>
      </ChakraLink>
    </Flex>
  )
}

export default Project
