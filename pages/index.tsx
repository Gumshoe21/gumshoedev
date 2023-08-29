import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '@navbar/Navbar'
import Hero from '@home/Sections/Hero/Hero'
import AboutMe from '@home/Sections/AboutMe'
import Technologies from '@home/Sections/Technologies/Technologies'
import Projects from '@home/Sections/Projects/Projects'
import { motion, useScroll, useSpring } from 'framer-motion'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
		<>
			<Navbar />

			<Box sx={{ 'scroll-behavior': 'smooth' }}>
				<motion.div className='progress-bar' style={{ scaleX }} />
				<Hero />

				<Box className='section-divider'></Box>
				<AboutMe />

				<Box className='section-divider'></Box>
				<Technologies />

				<Box className='section-divider'></Box>
				<Projects />
				<Box className='section-divider'></Box>
			</Box>
		</>
	);
}

export default Home
