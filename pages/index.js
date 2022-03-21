import NextLink from 'next/link'
import Image from 'next/image'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Hero from '../components/hero'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Container textAlign={'center'} paddingY={{ base: 2, md: 5 }}>
        <Box display={{ md: 'flex' }} py={{ base: 10, md: 20 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              John Knowles
            </Heading>
            <p>Digital Architect</p>
            <p> ( Creative UI / Interactive UX / Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Mollit reprehenderit labore deserunt irure in aute elit sint commodo
            nostrud. Amet laborum veniam nisi in ipsum tempor culpa Lorem veniam
            adipisicing amet commodo. Nisi sunt sunt adipisicing veniam.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default HomePage
