import { Flex, Text } from '@chakra-ui/react';

const Date = ({ children }) => {
	return (
		<Flex
			w="33%"
			textAlign="center"
			direction="column"
			alignSelf="center"
			justify="center"
		>
			<Text fontWeight="600" fontFamily="Monospace" fontSize="1.8rem">
				{children}
			</Text>
		</Flex>
	);
};

export default Date;
