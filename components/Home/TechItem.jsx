import { Flex, useColorModeValue } from '@chakra-ui/react';

const TechItem = (props) => {
  const { label, icon, color } = props;
  const Icon = icon;
  const techItemBgColor = useColorModeValue('White', 'gray.700');
  const shadowColor = useColorModeValue(
    '0.5px 4px 10px -5px #000',
    '0.5px 4px 10px -5px #fff'
  );
  const shadowColorHover = useColorModeValue(
    '0.5px 4px 22px -2px #000',
    '0.5px 4px 22px -2px #fff'
  );
  return (
    <Flex
      bg={techItemBgColor}
      direction="column"
      align="center"
      tranisition="0.3s all"
      borderRadius="20px"
      boxShadow={shadowColor}
      _hover={{
        transition: '0.3s all',

        boxShadow: shadowColorHover,
        translateZ: 40
      }}
      p={10}
    >
      <Flex mb={2}>
        <Icon color={color} size={60} />
      </Flex>
      <Flex>{label}</Flex>
    </Flex>
  );
};

export default TechItem;
