import { Flex } from '@chakra-ui/react';
import Title from './Title';
import Date from './Date';

const Layout = ({ children, title, date }) => {
	return (
		<Flex direction="column" align="center" justify="center">
			<Title>{title}</Title>
			<Flex
				borderRadius="20px"
				direction="column"
				align="center"
				justify="center"
				mx={{ sm: '6.4rem', md: '8.0rem', lg: '9.6rem', '2xl': '50rem' }}
				gap={8}
			>
				<Date>{date}</Date>
				{children}
			</Flex>
		</Flex>
	);
};

export default Layout;
