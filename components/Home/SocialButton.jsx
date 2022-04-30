import { IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';

const SocialButton = (props) => {
  const { color, href, svg } = props;
  const Svg = svg;
  return (
    <NextLink href={href}>
      <IconButton
        icon={<Svg size={30} />}
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
