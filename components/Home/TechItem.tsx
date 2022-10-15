import { Flex, useColorModeValue } from '@chakra-ui/react';

const TechItem = props => {
	const { label, icon, color } = props;
	const Icon = icon;
	const techItemBgColor = useColorModeValue('White', 'gray.700');
	const shadowColor = useColorModeValue(
		'0.5px 4px 10px -5px #000',
		'0.5px 4px 10px -5px #fff',
	);
	const shadowColorHover = useColorModeValue(
		'0.5px 4px 22px -2px #000',
		'0.5px 4px 22px -2px #fff',
	);
	return (
		<Flex w="100%" direction="column" align="center" px={10} mx={8}>
			<Flex>
				<Icon color={color} size={70} />
			</Flex>
			<Flex>{label}</Flex>
		</Flex>
	);
};

export default TechItem;
