import { Flex, Heading, Box } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import TechItem from '../TechItem';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';

import {
	SiJavascript,
	SiMongodb,
	SiExpress,
	SiRubyonrails,
	SiPostgresql,
	SiPostman,
} from 'react-icons/si';
const Technologies = () => {
	return (
		<Flex direction="column" py={10} w="100vw">
			<Flex direction="column" rowGap="4.8rem">
				<Flex align="center" justify="center" direction="column">
					<Heading
						textTransform="uppercase"
						fontSize="2.0rem"
						textAlign="center"
						letterSpacing=".3rem"
					>
						Some of the technologies I&apos;ve worked with
					</Heading>
				</Flex>
				<Box as={Marquee} speed={200} gradient={true} gradientWidth="100">
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
		</Flex>
	);
};

export default Technologies;
