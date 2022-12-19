import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ children }) => {
  return (
    <Heading textAlign='center' fontSize='2.0rem' letterSpacing='.3rem' textTransform='uppercase'>
      {children}
    </Heading>
  )
}

export default SectionHeading;
