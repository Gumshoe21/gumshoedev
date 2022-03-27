import React, { Fragment } from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Button,
  Image,
  useColorMode
} from '@chakra-ui/react';
import { Image as NextImage } from 'next/image';
import profilePic from '../public/gumshoe.png';

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Fragment>
      <Container maxW="container.xl">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Flex
          h="100vh"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Image
            as={NextImage}
            src="/gumshoe.png"
            borderRadius="full"
            mb={8}
          ></Image>
          <Heading fontSize="4.8rem" mb={8}>
            Hi, I'm Matthew
          </Heading>
          <Heading fontSize="2.2rem" mb={4}>
            I'm a Full Stack Web Developer from Los Angeles, California.
          </Heading>
          <Heading fontSize="2.2rem">
            I also like to write &mdash; check out{' '}
            <Link href="https://gumshoe.hashnode.dev">my ramblings.</Link>
          </Heading>
        </Flex>
      </Container>
    </Fragment>
  );
}

export default Home;
