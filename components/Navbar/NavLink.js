import NextLink from 'next/link';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';

const NavLink = (props) => {
  const navLinkHoverColor = useColorModeValue('blue.500', 'purple.300');
  return (
    <NextLink href={props.href} passHref>
      <Link
        _hover={{
          color: navLinkHoverColor
        }}
      >
        <Text fontWeight="bold">{props.text}</Text>
      </Link>
    </NextLink>
  );
};

export default NavLink;
