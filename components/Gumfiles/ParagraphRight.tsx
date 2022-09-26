import { Flex, Text } from '@chakra-ui/react';

import ParagraphText from './ParagraphText';
const ParagraphRight = ({ children }) => {
	return (
		<Flex
			w="33%"
			textAlign="center"
			direction="column"
			alignSelf="end"
			justify="center"
		>
			<ParagraphText>{children}</ParagraphText>
		</Flex>
	);
};

export default ParagraphRight;
