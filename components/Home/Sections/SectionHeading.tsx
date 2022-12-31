import { Heading } from '@chakra-ui/react'

interface ISectionHeading {
  children: string
}

const SectionHeading = ({ children }: ISectionHeading) => {
  return (
    <Heading textAlign='center' fontSize='2.0rem' letterSpacing='.3rem' textTransform='uppercase'>
      {children}
    </Heading>
  )
}

export default SectionHeading
