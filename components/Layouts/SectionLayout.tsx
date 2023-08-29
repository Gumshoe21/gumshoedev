import { Flex } from '@chakra-ui/react';

export default function SectionLayout({ children }) {
	return (
		<Flex direction='column' align='center' justify='center' maxW='6xl' mx='auto' px='20'>
			{children}
		</Flex>
	);
}
