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
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

import Hero from '../components/hero'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

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
          <Box align="center" my={4}>
            <NextLink href="/contact" scroll={false} passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Hire Me
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' varaint='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
            Senior Full Stack Bootcamp Tutor @ Trilogy Education Services
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            SAP Variant Configuration Developer @ Columbus Mckinnion Corp.
          </BioSection>
          <BioSection>
            <BioYear>2022 to Present</BioYear>
            Contract/Freelance Web Develooper
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            On The Web
          </Heading>
          <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/johnaknowles/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<AiFillLinkedin />}
              >
                @johnaknowles
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/johnisadev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<AiFillGithub />}
              >
                @Johnisadev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<AiFillTwitterCircle/>}
              >
                @johnisdev
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default HomePage
