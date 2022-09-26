import { Flex, Text } from '@chakra-ui/react';
import ParagraphText from './ParagraphText';
const ParagraphLeft = ({ children }) => {
	return (
		<Flex
			w="33%"
			textAlign="center"
			direction="column"
			alignSelf="start"
			justify="center"
		>
			<ParagraphText>{children}</ParagraphText>
		</Flex>
	);
};

export default ParagraphLeft;
