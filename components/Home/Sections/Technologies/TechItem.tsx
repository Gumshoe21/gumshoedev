import { ReactElement } from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

interface ITechItem {
  label: string
  icon: ReactElement
  color: string
}

const TechItem = (props) => {
  const { label, icon, color } = props

  const Icon = icon
  const techItemBgColor = useColorModeValue('purple.700', 'blue.300')

  return (
    <Flex w='100%' direction='column' gap={1} align='center' justify='space-around' px={10} mx={8}>
      <Flex color={techItemBgColor}>
        <Icon  size={70} />
      </Flex>
      <Flex fontFamily='Montserrat' fontWeight='bold' letterSpacing={2}>
        {label}
      </Flex>
    </Flex>
  )
}

export default TechItem
