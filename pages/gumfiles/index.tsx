import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Gumfiles = () => {
	return (
		<Box fontSize="2.4rem">
			<Link as={NextLink} href="gumfiles/OBSOLESCENCE">
				OBSOLESCENCE
			</Link>
		</Box>
	);
};
export default Gumfiles;
