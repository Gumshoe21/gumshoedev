import { keyframes, useColorModeValue, Box, Flex, Heading } from '@chakra-ui/react'
import SocialButton from './SocialButton'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  //  const section1BgColor = useColorModeValue('orange.100', 'gray.600')
  // const profilePicShadow = useColorModeValue('0px 12px 27px -12px #000', '0px 12px 27px -10px #fff')
  // const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  const fadeIn = (dir: string): string => {
    return keyframes`100% { ${dir}:0; }`
  }


  const blinkCaret =
    keyframes`
      from, to { border-color: transparent }
      50% { border-color: blue }
    `;

  const typing = keyframes`
      from { width: 0 }
      to { width: 100% }
    `;
  return (
    <Flex
      id='hero'
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
          animation: `1000ms ${fadeIn('top')} forwards`,
        }}
      >
        <img id='arlen' src='headshot.jpg' alt='Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev' />
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
          animation: `1000ms ${fadeIn('right')} forwards`,
          animationDelay: '200ms',
        }}
      >
        Matthew Smilansky
      </Heading>
      <Flex display='flex' justifyContent='center'>
      <Box
        as='h1'
        color='red'
        overflow='hidden'
        borderRight='1rem solid orange'
        whiteSpace='nowrap'
        margin='0 auto'
        letterSpacing='.15em'
        sx={{
          animation: `${typing} 2s steps(30, end),${blinkCaret} 1s step-end infinite`,
        }}
        >
        The cat and the hat.
      </Box>
      </Flex>
      <Heading
        fontSize={{ base: 'md', md: '2xl' }}
        fontFamily='Montserrat'
        fontWeight='600'
        position='relative'
        left='-100%'
        sx={{
          animation: `1000ms ${fadeIn('left')} forwards`,
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
          animation: `1s ${fadeIn('bottom')} forwards`,
        }}
      >
        <SocialButton icon={<FaEnvelope size={26} />} href='mailto:msmilansky@gmail.com' />
        <SocialButton icon={<FaTwitter size={26} />} href='https://twitter.com/gumshoe_dev' />
        <SocialButton icon={<FaLinkedin size={26} />} href='https://linkedin.com/in/matthew-smilansky' />
        <SocialButton icon={<FaGithub size={26} />} href='https://github.com/Gumshoe21' />
      </Flex>
    </Flex>
  )
}

export default Hero
