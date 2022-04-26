import IconButton from '@chakra-ui/icons';
import NextLink from 'next/link';

const SocialButton = (props) => {
  const { icon, color, href } = props;
  const Icon = icon;
  return (
    <NextLink href={href}>
      <IconButton
        icon={<Icon size={30} />}
        bg="none"
        _hover={{
          cursor: 'pointer',
          bg: 'none',
          transform: 'translateY(-4px)'
        }}
        _active={{ cursor: 'pointer', bg: 'none' }}
        color={color}
      />
    </NextLink>
  );
};

export default SocialButton;
