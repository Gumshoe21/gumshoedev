import NextLink from "next/link";
import { Link, Text, useColorModeValue } from "@chakra-ui/react";

const NavLink = (props) => {
  const navLinkHoverColor = useColorModeValue("blue.500", "purple.300");
  return (
    <Link
      fontWeight="bold"
      as={NextLink}
      _hover={{ color: navLinkHoverColor }}
      href={props.href}
      passHref
    >
      {props.text}
    </Link>
  );
};

export default NavLink;
