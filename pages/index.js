import React, { Fragment } from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Button,
  useColorMode
} from '@chakra-ui/react';
import profilePic from '../public/gumshoe.png';
import Image from '../components/Image';

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
          <Box mb={10}>
            <Image
              alt="Gumshoe's Profile Picture of a cartoon private investigator."
              src={profilePic}
              width={5}
              height={5}
              borderRadius="full"
              mb={20}
            />
          </Box>
          <Heading fontSize="4.8rem" mb={8}>
            Hi, I&apos;m Matthew
          </Heading>
          <Heading fontSize="2.2rem" mb={4}>
            I&apos;m a Full Stack Web Developer from Los Angeles, California.
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
