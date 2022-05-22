import React, { Fragment } from 'react';
import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Link,
  useColorModeValue,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';
import profilePic from '../public/gumshoe.png';
import gumshoeDevImage from '../public/gumshoedev.jpg';
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
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';

import TechItem from './../components/Home/TechItem';
import SocialButton from './../components/Home/SocialButton';

const Home = () => {
  const blogLinkColor = useColorModeValue('blue.500', 'purple.300');
  const envelopeIconColor = blogLinkColor;
  const twitterIconColor = '#1DA1F2';
  const linkedInIconColor = '#0a66c2';

  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const section1BgColor = useColorModeValue('orange.100', 'gray.600');

  const profilePicShadow = useColorModeValue(
    '0px 10px 10px -12px #000',
    '0px 10px 10px -12px #fff'
  );

  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
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
          />
        </Box>
        <Heading mb={8} size="3xl">
          Hi&#44; my name is Matthew
        </Heading>
        <Heading mb={2} size="md">
          I&apos;m a Full Stack Web Developer from Los Angeles, California.
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

      <Flex
        bg={section1BgColor}
        justifyContent="center"
        transitionDuration="200ms"
        py={20}
        px={4}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading
            fontSize={{ md: 30, sm: 24 }}
            letterSpacing=".5rem"
            textTransform="uppercase"
            textAlign="center"
            ml={4}
            mb={16}
          >
            Tech Stack
          </Heading>
          <Grid
            templateColumns="repeat(8,1fr)"
            templateRows="repeat(2,1fr)"
            gap={{ md: 10, sm: 4, base: 4 }}
          >
            <GridItem gridColumn="2 / 4" gridRow="1 / 2">
              <TechItem icon={FaHtml5} label={'HTML5'} color="#E34C26" />
            </GridItem>
            <GridItem gridColumn="4 / 6" gridRow="1 / 2">
              <TechItem icon={FaCss3Alt} label={'CSS3'} color="#264de4" />
            </GridItem>

            <GridItem gridColumn="6 / 8" gridRow="1 / 2">
              <TechItem
                icon={SiJavascript}
                label={'JavaScript'}
                color="#f7df1e"
              />
            </GridItem>

            <GridItem gridColumn="1/3" gridRow="2/3">
              <TechItem icon={SiMongodb} label={'MongoDB'} color="#4DB33D" />
            </GridItem>

            <GridItem gridColumn="3/5" gridRow="2/3">
              <TechItem icon={SiExpress} label={'ExpressJS'} color="#828282" />
            </GridItem>

            <GridItem gridColumn="5/7" gridRow="2/3">
              <TechItem icon={FaReact} label={'ReactJS'} color="#61DBFB" />
            </GridItem>

            <GridItem gridColumn="7/9" gridRow="2/3">
              <TechItem icon={FaNodeJs} label={'NodeJS'} color="#68A063" />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
      <Flex p={20} align="center" justify="center" direction="column">
        <Heading
          fontSize={{ md: 30, sm: 24 }}
          letterSpacing=".5rem"
          textTransform="uppercase"
          textAlign="center"
          ml={4}
          mb={16}
        >
          Projects
        </Heading>
        <Flex gap={16} align="center" direction={{ md: 'row', sm: 'column' }}>
          <Flex
            mb={8}
            justify="center"
            align="center"
            gap={4}
            direction="column"
          >
            <Image
              loading="lazy"
              src={gumshoeDevImage}
              boxShadow={profilePicShadow}
            />
            <Heading>12 Hour Study</Heading>
            <Text>Studying/productivity timer app.</Text>
          </Flex>
          <Flex
            mb={8}
            direction="column"
            justify="center"
            align="center"
            gap={4}
          >
            <Image
              loading="lazy"
              src={gumshoeDevImage}
              boxShadow={profilePicShadow}
            />
            <Heading>12 Hour Study</Heading>
            <Text>Studying/productivity timer app.</Text>
          </Flex>
          <Flex
            mb={8}
            direction="column"
            justify="center"
            align="center"
            gap={4}
          >
            <Image
              loading="lazy"
              src={gumshoeDevImage}
              boxShadow={profilePicShadow}
            />
            <Heading>12 Hour Study</Heading>
            <Text>Studying/productivity timer app.</Text>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Home;
