import React, { Fragment } from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  Icon,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import profilePic from '../public/gumshoe.png';
import Image from '../components/Image';
import Navbar from '../components/Navbar/Navbar';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import {
  SiRedux,
  SiJavascript,
  SiMongodb,
  SiChakraui,
  SiExpress
} from 'react-icons/si';

import { DiHtml5, DiCss3, DiJavascript, DiMongodb, Di } from 'react-icons/di';
import NextLink from 'next/link';
import TechItem from './../components/Home/TechItem';

function Home() {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300');
  const envelopeIconColor = blogLinkColor;
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const section1BgColor = useColorModeValue('orange.100', 'gray.600');

  return (
    <Fragment>
      <Navbar />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
        bg={heroBgColor}
      >
        <Box mb={2} borderRadius="50%">
          <Image
            borderRadius="50%"
            src={profilePic}
            boxShadow="0px 10px 10px -8px #000"
            transform="translateY(-10px)"
          />
        </Box>
        <Heading mb={8} size="2xl">
          Hi, I&apos;m Matthew
        </Heading>
        <Heading mb={4} size="md">
          I&apos;m a Full Stack Web Developer from Los Angeles, California.
        </Heading>
        <Heading mb={8} size="md">
          I also like to write &mdash; check out{' '}
          <Link href="https://blog.gumshoe.dev" color={blogLinkColor}>
            my ramblings.
          </Link>
        </Heading>
        <Flex columnGap={2}>
          <NextLink href="mailto:matthew@gumshoe.dev">
            <IconButton
              icon={<FaEnvelope size={30} />}
              bg="none"
              _hover={{
                cursor: 'pointer',
                bg: 'none',
                transform: 'translateY(-2px)'
              }}
              _active={{ cursor: 'pointer', bg: 'none' }}
              color={envelopeIconColor}
            />
          </NextLink>
          <NextLink href="https://twitter.com/gumshoedev">
            <IconButton
              icon={<FaTwitter size={30} />}
              bg="none"
              _hover={{
                cursor: 'pointer',
                bg: 'none',
                transform: 'translateY(-2px)'
              }}
              _active={{ cursor: 'pointer', bg: 'none' }}
              color="#1DA1F2"
            />
          </NextLink>
          <NextLink href="https://linkedin.com/in/matthew-smilansky">
            <IconButton
              icon={<FaLinkedin size={30} />}
              bg="none"
              _hover={{
                cursor: 'pointer',
                bg: 'none',

                transform: 'translateY(-2px)'
              }}
              _active={{ cursor: 'pointer', bg: 'none' }}
              color="#0a66c2"
            />
          </NextLink>

          <NextLink href="https://github.com/Gumshoe21">
            <IconButton
              icon={<FaGithub size={30} />}
              bg="none"
              _hover={{
                cursor: 'pointer',
                bg: 'none',

                transform: 'translateY(-2px)'
              }}
              _active={{ cursor: 'pointer', bg: 'none' }}
            />
          </NextLink>
        </Flex>
      </Flex>
      <Flex bg={section1BgColor} justifyContent="center">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          py={20}
          gap={8}
        >
          <Heading
            mb={8}
            fontSize={30}
            letterSpacing="1rem"
            textTransform="uppercase"
          >
            Tech Stack
          </Heading>
          <Flex p={8} gap={60}>
            <TechItem icon={FaHtml5} label={'HTML5'} />
            <TechItem icon={FaCss3Alt} label={'CSS3'} />
            <TechItem icon={SiJavascript} label={'JavaScript'} />
          </Flex>
          <Flex p={8} gap={60}>
            <TechItem icon={SiMongodb} label={'MongoDB'} />
            <TechItem icon={SiExpress} label={'ExpressJS'} />
            <TechItem icon={FaReact} label={'ReactJS'} />
            <TechItem icon={FaNodeJs} label={'NodeJS'} />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
}

export default Home;
