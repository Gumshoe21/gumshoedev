import React, { Fragment } from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Container,
  Spacer,
  Link,
  propNames,
  useColorModeValue,
  Tooltip,
  Text
} from '@chakra-ui/react';

import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const iconWidthAndHeight = '8';
  const iconBackgroundColor = useColorModeValue('purple.600', 'orange.200');

  const iconBackgroundHover = useColorModeValue('purple.800', 'orange.300');
  const iconColor = useColorModeValue('whiteAlpha.900', 'gray.900');
  const navbarBgColor = useColorModeValue('#ffffff', 'gray.800');
  return (
    <Box zIndex="1">
      <Flex
        opacity="100%"
        bg={navbarBgColor}
        py={4}
        alignItems="center"
        justify={{ md: 'center', sm: 'center' }}
        mr={{ sm: 4 }}
        w="100%"
        transitionDuration="200ms"
        position="fixed"
      >
        <Flex
          w="100%"
          justify="center"
          align="center"
          flexDirection="row"
          columnGap={10}
        >
          <Tooltip placement="bottom" label="Under Construction!" zIndex={2}>
            <Text fontWeight="bold">Projects</Text>
          </Tooltip>
          <NavLink href="https://blog.gumshoe.dev" text={'Blog'} />
          <IconButton
            bg={iconBackgroundColor}
            color={iconColor}
            variant="solid"
            _hover={{ bg: iconBackgroundHover }}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} textAlign="center"></Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
