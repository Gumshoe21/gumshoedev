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
				<AboutMe />
				<Technologies />
				<Projects />
				<Box w='100%' h='1px' borderBottom='1px solid red'></Box>
			</Box>
		</>
	);
}

export default Home
