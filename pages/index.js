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
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import NavLink from './../components/Navbar/NavLink';
import NextLink from 'next/link';
import NextImage from 'next/image';

function Home() {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300');

  return (
    <Fragment>
      <Navbar />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
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
    </Fragment>
  );
}

export default Home;
