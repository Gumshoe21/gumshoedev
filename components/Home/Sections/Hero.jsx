import { useColorModeValue, Box, Flex, Heading, Link } from '@chakra-ui/react';
import profilePic from '../../../public/gumshoe.png';

import SocialButton from '../../../components/Home/SocialButton';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from '../../../components/Image';
const Hero = () => {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300');
  const envelopeIconColor = blogLinkColor;
  const twitterIconColor = '#1DA1F2';
  const linkedInIconColor = '#0a66c2';
  const section1BgColor = useColorModeValue('orange.100', 'gray.600');
  const profilePicShadow = useColorModeValue(
    '0px 10px 10px -12px #000',
    '0px 10px 10px -12px #fff'
  );
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bg={heroBgColor}
      transitionDuration="200ms"
      px={4}
    >
      <Box mb={8} borderRadius="50%">
        <Image
          borderRadius="50%"
          src={profilePic}
          boxShadow={profilePicShadow}
          transform="translateY(-10px)"
          alt="Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev"
        />
      </Box>
      <Heading mb={8} fontSize="3.6rem">
        Hi&#44; I&apos;m Matthew
      </Heading>
      <Heading mb={2} fontSize="1.2rem">
        I&apos;m a web developer from Los Angeles&#44; California.
      </Heading>
      <Heading mb={8} size="md">
        I also like to write &mdash; check out{' '}
        <Link href="https://blog.gumshoe.dev" color={blogLinkColor}>
          my ramblings.
        </Link>
      </Heading>
      <Flex columnGap={2}>
        <SocialButton
          svg={FaEnvelope}
          color={envelopeIconColor}
          href="mailto:msmilansky@gmail.com"
        />
        <SocialButton
          svg={FaTwitter}
          color={twitterIconColor}
          href="https://twitter.com/Gumshoe21"
        />
        <SocialButton
          svg={FaLinkedin}
          color={linkedInIconColor}
          href="https://linkedin.com/in/matthew-smilansky"
        />
        <SocialButton svg={FaGithub} href="https://github.com/Gumshoe21" />
      </Flex>
    </Flex>
  );
};

export default Hero;
