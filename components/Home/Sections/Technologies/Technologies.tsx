import { Flex, Heading, Box } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import TechItem from './TechItem'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'

import SectionHeading from '@home/Sections/SectionHeading'
import { SiJavascript, SiMongodb, SiExpress, SiRubyonrails, SiPostgresql, SiPostman } from 'react-icons/si'

const Technologies = () => {
  return (
    <Flex id='techstack' direction='column' py={20} w='100vw'>
      <Flex direction='column' gap={10}>
        <Flex align='center' justify='center' mx={12} direction='column'>
          <SectionHeading>Tech Stack / Tools:</SectionHeading>
        </Flex>
        <Box as={Marquee} speed={200} gradient={false}>
          <TechItem icon={FaHtml5} label={'HTML5'} color='#E34C26' />
          <TechItem icon={FaCss3Alt} label={'CSS3'} color='#264de4' />
          <TechItem icon={SiJavascript} label={'JavaScript'} color='#f7df1e' />
          <TechItem icon={FaNodeJs} label={'Node.js'} color='#68A063' />
          <TechItem icon={FaReact} label={'React.js'} color='#61DBFB' />
          <TechItem icon={SiExpress} label={'Express.js'} color='#828282' />
          <TechItem icon={SiMongodb} label={'MongoDB'} color='#4DB33D' />
          <TechItem icon={SiRubyonrails} label={'Ruby on Rails'} color='#CC0000' />
          <TechItem icon={SiPostgresql} label={'PostgreSQL'} color='#326690' />
          <TechItem icon={SiPostman} label={'Postman'} color='#EF5B25' />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Technologies
