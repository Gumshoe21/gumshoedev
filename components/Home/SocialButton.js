import IconButton from '@chakra-ui/icons';

const SocialButton = (props) => {
  return (
    <IconButton
      color={props.color}
      as={props.as}
      _hover={{ cursor: 'pointer' }}
      variant="link"
    />
  );
};

export default SocialButton;
