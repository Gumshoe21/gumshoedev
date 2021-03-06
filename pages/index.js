import React, { Fragment } from 'react';
import Head from 'next/head';
import Marquee from 'react-fast-marquee';
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
import placeholder from '../public/placeholder400x400.png';
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

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiRubyonrails,
  SiPostgresql,
  SiPostman
} from 'react-icons/si';

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
            alt="Profile Picture for Matthew Smilansky on his personal website, gumshoe.dev"
          />
        </Box>
        <Heading mb={8} fontSize="3.6rem">
          Hi&#44; I&apos;m Matthew
        </Heading>
        <Heading mb={2} fontSize="1.2rem">
          I&apos;m a Full Stack Web Developer from Los Angeles&#44; California.
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
      <Flex direction="column">
        <Flex
          rowGap="4.8rem"
          direction="column"
          bg={heroBgColor}
          transitionDuration="200ms"
          mb="6.4rem"
        >
          <Flex align="center" justify="center" direction="column">
            <Heading
              textTransform="uppercase"
              textAlign="center"
              fontSize="2.0rem"
            >
              About Me
            </Heading>
          </Flex>
          <Flex
            fontSize="1.2rem"
            textAlign="center"
            direction={{ md: 'row', base: 'column' }}
            align="center"
            justify="center"
            gap="3.2rem"
          >
            <Flex>
              <Image src={placeholder} />
            </Flex>
            <Flex
              direction="column"
              w={{ md: '50vw', base: '90vw' }}
              fontFamily="mono"
            >
              <Text>
                I was born in Los Angeles&#44; California and moved to Kfar
                Saba&#44; Israel with my family at a very young age (!????, ??????
                ???????? ??????????). I then moved back to the United States in late
                childhood&#44; where I&apos;ve been living ever since. I&apos;ve
                always had an affinity for technology. When I was 4 years
                old&#44; my parents purchased a Windows 3.1 PC&#44; and I was
                immediately hooked.
              </Text>
              <br></br>
              <Text>
                I graduated from the University of California&#44; Los Angeles
                (UCLA) in 2014 with a Bachelor of Arts degree in English
                Language and Literature. I&apos;ve always been a big reader and
                enjoy writing from time to time (check out my blog).
              </Text>
              <Text>
                <br></br>
                After graduating college&#44; I started developing an interest
                in computer programming and began learning how to code websites
                and web applications. And here I am now!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        rowGap="1.6rem"
        direction="column"
        bg={heroBgColor}
        transitionDuration="200ms"
      >
        <Flex align="center" justify="center">
          <Heading
            textTransform="uppercase"
            textAlign="center"
            fontSize="2.0rem"
          >
            Some of the technologies I&apos;ve worked with
          </Heading>
        </Flex>
        <Box as={Marquee} speed="100" gradient="true" gradientWidth="200">
          <TechItem icon={FaHtml5} label={'HTML5'} color="#E34C26" />
          <TechItem icon={FaCss3Alt} label={'CSS3'} color="#264de4" />
          <TechItem icon={SiJavascript} label={'JavaScript'} color="#f7df1e" />
          <TechItem icon={FaNodeJs} label={'NodeJS'} color="#68A063" />
          <TechItem icon={FaReact} label={'ReactJS'} color="#61DBFB" />
          <TechItem icon={SiExpress} label={'ExpressJS'} color="#828282" />
          <TechItem icon={SiMongodb} label={'MongoDB'} color="#4DB33D" />
          <TechItem
            icon={SiRubyonrails}
            label={'Ruby on Rails'}
            color="#CC0000"
          />
          <TechItem icon={SiPostgresql} label={'PostgreSQL'} color="#326690" />
          <TechItem icon={SiPostman} label={'Postman'} color="#EF5B25" />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Home;
