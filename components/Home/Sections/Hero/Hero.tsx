import { keyframes, useColorModeValue, Box, Flex, Heading, Link } from '@chakra-ui/react'
import profilePic from '@public/gumshoe.png'

import SocialButton from './SocialButton'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Image from '@components/Image'

const Hero = () => {
  const section1BgColor = useColorModeValue('orange.100', 'gray.600')
  const profilePicShadow = useColorModeValue('0px 10px 10px -12px #000', '0px 10px 10px -12px #fff')
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  const fadeInLeft = keyframes`
		100% { left:0; }
  `
  const fadeInRight = keyframes`
		100% { right:0; }
  `

  const fadeInBottom = keyframes`
		100% { bottom:0; }
  `

  const fadeInTop = keyframes`
	  100% { top:0; }
   `
  return (
    <Flex
      align='center'
      justify='center'
      flexDirection='column'
      height='calc(100vh - 72px)'
      transitionDuration='200ms'
      pt={40}
      pb={20}
      textAlign='center'
      position='relative'
    >
      <Box
        alignSelf='center'
        borderRadius='50%'
        position='relative'
        top='-100%'
        sx={{
          animation: `1000ms ${fadeInTop} forwards`,
        }}
      >
        <Image
          borderRadius='50%'
          src={profilePic}
          boxShadow={profilePicShadow}
          transform='translateY(-10px)'
          alt='Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev'
        />
      </Box>
      <Heading
        as='h1'
        fontSize={{ base: '4xl', md: '6xl' }}
        fontWeight='600'
        letterSpacing='1px'
        py={2}
        position='relative'
        right='-100%'
        sx={{
          animation: `1s ${fadeInRight} forwards`,
          animationDelay: '200ms',
        }}
      >
        Matthew Smilansky
      </Heading>
      <Heading
        fontSize={{ base: 'lg', md: '2xl' }}
        fontFamily='Montserrat'
        fontWeight='600'
        position='relative'
        left='-100%'
        sx={{
          animation: `1s ${fadeInLeft} forwards`,
          'animation-delay': '200ms',
        }}
      >
        Software Developer
      </Heading>
      <Flex
        columnGap={2}
        py={2}
        bottom='-100%'
        position='relative'
        sx={{
          animation: `800ms ${fadeInBottom} forwards`,
        }}
      >
        <SocialButton svg={FaEnvelope} href='mailto:msmilansky@gmail.com' />
        <SocialButton svg={FaTwitter} href='https://twitter.com/Gumshoe21' />
        <SocialButton svg={FaLinkedin} href='https://linkedin.com/in/matthew-smilansky' />
        <SocialButton svg={FaGithub} href='https://github.com/Gumshoe21' />
      </Flex>
    </Flex>
  )
}

export default Hero
