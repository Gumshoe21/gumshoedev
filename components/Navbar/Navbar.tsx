import React, { Fragment } from 'react'

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
  Text,
} from '@chakra-ui/react'

import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLink from '@navbar/NavLink'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const iconBackgroundColor = useColorModeValue('purple.600', 'orange.200')

  const iconBackgroundHover = useColorModeValue('purple.800', 'orange.300')
  const iconColor = useColorModeValue('whiteAlpha.900', 'gray.900')

  return (
    <Box zIndex='2' position='fixed' css={{ backdropFilter: 'blur(5px)' }} w='100%'>
      <Flex opacity='100%' py={4} alignItems='center' justify={{ md: 'center', sm: 'center' }} transitionDuration='200ms'>
        <Flex w='100%' justify='center' align='center' flexDirection='row' columnGap={10}>
          <NavLink href='#hero' text={'Home'} />
          <NavLink href='#about' text={'About Me'} />

          <NavLink href='#techstack' text={'Tech Stack'} />
          <NavLink href='#projects' text={'Projects'} />
          <NavLink href='https://blog.gumshoe.dev' text={'Blog'} />
          <IconButton
            aria-label={' '}
            bg={iconBackgroundColor}
            color={iconColor}
            variant='solid'
            _hover={{ bg: iconBackgroundHover }}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} textAlign='center'></Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar
