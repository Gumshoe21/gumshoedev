import NextLink from 'next/link'
import { Link, chakra, LinkProps } from '@chakra-ui/react'

const LinkEl = chakra(NextLink, {
  shouldForwardProps: (prop) => {
    return ['href'].includes(prop)
  },
})

const ChakraLink = (LinkProps) => {
  return <LinkEl as={Link} {...LinkProps} />
}

export default ChakraLink
