import { Flex, Text } from '@chakra-ui/react';

import ParagraphText from './ParagraphText';
const ParagraphCenter = ({ children }) => {
	return (
		<Flex
			w="33%"
			textAlign="center"
			direction="column"
			alignSelf="center"
			justify="center"
		>
			<ParagraphText>{children}</ParagraphText>
		</Flex>
	);
};

export default ParagraphCenter;
