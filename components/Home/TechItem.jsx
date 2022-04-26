import { Flex } from '@chakra-ui/react';

const TechItem = (props) => {
  const { label, icon } = props;
  const Icon = icon;

  return (
    <Flex direction="column" gap={4} align="center">
      <Flex>
        <Icon size={30} />
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
