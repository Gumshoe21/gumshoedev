import { ReactElement, ReactNode } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { IconLookup, IconName, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import NextLink from 'next/link'

interface ISocialButton {
  href: string
  icon: React.ReactElement
}

const SocialButton = (props: ISocialButton) => {
  console.log(useColorModeValue('purple.700', 'blue.300'))

  const { icon, href } = props

  return (
    <NextLink href={href} passHref>
      <IconButton
        icon={icon}
        bg='none'
        _hover={{
          cursor: 'pointer',
          bg: 'none',
          transform: 'translateY(-4px)',
        }}
        _active={{ cursor: 'pointer', bg: 'none' }}
        color={useColorModeValue('purple.700', 'blue.300')}
        aria-label={''}
      />
    </NextLink>
  )
}

export default SocialButton
