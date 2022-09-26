import { Heading } from '@chakra-ui/react';

const Title = ({ children }) => {
	return (
		<Heading
			fontSize="4.8rem"
			fontFamily="Times New Roman"
			textTransform="uppercase"
			mb={2}
		>
			{children}
		</Heading>
	);
};

export default Title;
