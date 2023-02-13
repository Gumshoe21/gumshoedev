import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '@navbar/Navbar'
import Hero from '@home/Sections/Hero/Hero'
import AboutMe from '@home/Sections/AboutMe'
import Technologies from '@home/Sections/Technologies/Technologies'
import Projects from '@home/Sections/Projects/Projects'
import { motion, useScroll } from 'framer-motion'

const Home = () => {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Navbar />

      <Box>
        <Flex direction='column' align='center' justify='center' maxW='6xl' mx='auto' px='20'>

        <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
          <Hero />
          <AboutMe />
          <Technologies />
          <Projects />
        </Flex>
      </Box>
    </>
  )
}

export default Home
