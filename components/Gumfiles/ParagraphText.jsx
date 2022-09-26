import { Text } from '@chakra-ui/react';

const ParagraphText = ({ children }) => {
	return (
		<Text fontWeight="600" fontFamily="Monospace" fontSize="1.6rem">
			{children}
		</Text>
	);
};

export default ParagraphText;
