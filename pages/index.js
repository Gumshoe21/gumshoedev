import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Flex, Heading, useColorModeValue, Text } from '@chakra-ui/react';
import Image from '../components/Image';
import placeholder from '../public/placeholder400x400.png';
import Hero from './../components/Home/Sections/Hero';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiRubyonrails,
  SiPostgresql,
  SiPostman
} from 'react-icons/si';

import Navbar from '../components/Navbar/Navbar';
import TechItem from './../components/Home/TechItem';

const Home = () => {
  const heroBgColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  return (
    <Fragment>
      <Navbar />
      <Hero />
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
                Saba&#44; Israel with my family at a very young age (!כן, אני
                מדבר עברית). I then moved back to the United States in late
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
