import { Heading, Box, Flex } from '@chakra-ui/react';
const OBSOLESCNCE = () => {
	return (
		<Flex direction="column" align="center" justify="center">
			<Heading fontSize="3.2rem" textTransform="uppercase">
				Obsolescence
			</Heading>
			<Flex
				direction="column"
				align="center"
				justify="center"
				mx={{ sm: '2rem' }}
			>
				<Box>Sep 25, 2022</Box>
				<Box>
					I was browsing different graphics cards the other day on Amazon, not
					in an effort to actually purchase one, but to see how easy the process
					would be.
				</Box>
				<Box>I'm not currently in the market, but eventually I will be.</Box>
				<Box>Eventually everyone will be...</Box>
				<Box>
					The conclusion made is that I really don't understand the difference
					between a $400 card and a $500 card with the same model name but
					slightly different specs.
				</Box>
				<Box>
					More imoprtantly, I don't understand why I would need the more
					expensive option over the less expensive. Is there $100 worth of
					graphics power I'm missing out on if I opt lower?
				</Box>

				<Box>Would my needs even require it?</Box>
				<Box>
					If I'm buying now, I'd want to get a head start on the race against
					obsolescence, right? Why not 7 years of assured compatiblity instead
					of just 5 or 6?
				</Box>
				<Box>
					Some purchasing decisions are certainly more involved than others, and
					thankfully, hopefully, you only have to make this decision once every
					5+ years.
				</Box>
			</Flex>
		</Flex>
	);
};
export default OBSOLESCNCE;
