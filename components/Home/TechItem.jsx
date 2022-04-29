import { Flex } from '@chakra-ui/react';

const TechItem = (props) => {
  const { label, icon, color } = props;
  const Icon = icon;

  return (
    <Flex
      direction="column"
      align="center"
      tranisition="0.1s all"
      borderRadius="20px"
      border="1px solid #555"
      boxShadow="0.5px 4px 10px -3px #000"
      _hover={{
        transition: '0.3s all',

        boxShadow: '0.5px 4px 22px -3px #000',
        translateZ: 40
      }}
      p={10}
    >
      <Flex>
        <Icon color={color} size={60} />
      </Flex>
      <Flex>{label}</Flex>
    </Flex>
  );
};

export default TechItem;
<Flex>
  <Flex p={8} gap={60}></Flex>
  <Flex p={8} gap={60}></Flex>
</Flex>;
