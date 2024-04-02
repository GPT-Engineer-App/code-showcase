import React from "react";
import { Box, VStack, HStack, Heading, Text, Link, Image, Button, useColorModeValue, useColorMode, IconButton, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("blue.500", "blue.200");
  const secondaryColor = useColorModeValue("green.500", "green.200");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Box as="nav" p={4} bg={bgColor} position="sticky" top={0} zIndex={1}>
        <HStack justify="space-between">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <HStack spacing={4}>
            <Link href="#home">Home</Link>
            <Link href="#about">About Me</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
            <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} aria-label="Toggle color mode" />
          </HStack>
        </HStack>
      </Box>

      <VStack spacing={12} py={8} px={4} maxW="container.lg" mx="auto">
        <Box id="home" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMDE5NDMyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Programmer" borderRadius="full" boxSize="200px" mx="auto" />
          <Heading as="h2" size="xl" mt={6}>
            Hi, I'm John Doe
          </Heading>
          <Text fontSize="xl">Full Stack Web Developer</Text>
        </Box>

        <Box id="about">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text>I'm a passionate programmer with expertise in web development. I love creating elegant and efficient solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I strive to deliver high-quality applications that provide seamless user experiences.</Text>
        </Box>

        <Box id="projects">
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Project 1
              </Heading>
              <Text mb={2}>A brief description of Project 1 and its key features.</Text>
              <Link href="https://github.com/johndoe/project1" color={accentColor} isExternal>
                <Button leftIcon={<FaGithub />}>View on GitHub</Button>
              </Link>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Project 2
              </Heading>
              <Text mb={2}>A brief description of Project 2 and its key features.</Text>
              <Link href="https://github.com/johndoe/project2" color={accentColor} isExternal>
                <Button leftIcon={<FaGithub />}>View on GitHub</Button>
              </Link>
            </Box>
          </VStack>
        </Box>

        <Box id="blog">
          <Heading as="h2" size="xl" mb={4}>
            Blog
          </Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Link href="/blog/article1">
                <Heading as="h3" size="lg" mb={2}>
                  Article 1
                </Heading>
              </Link>
              <Text>A brief excerpt from Article 1...</Text>
            </Box>
            <Box>
              <Link href="/blog/article2">
                <Heading as="h3" size="lg" mb={2}>
                  Article 2
                </Heading>
              </Link>
              <Text>A brief excerpt from Article 2...</Text>
            </Box>
          </VStack>
        </Box>

        <Box id="contact">
          <Heading as="h2" size="xl" mb={4}>
            Contact Me
          </Heading>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your name" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message" />
          </FormControl>
          <Button colorScheme="blue">Send Message</Button>
        </Box>
      </VStack>

      <Box as="footer" py={8} textAlign="center">
        <Text mb={4}>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</Text>
        <HStack justify="center">
          <Link href="https://github.com/johndoe" color={accentColor} isExternal>
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" color={secondaryColor} isExternal>
            <FaLinkedin size={24} />
          </Link>
          <Link href="mailto:john@example.com" color={accentColor}>
            <FaEnvelope size={24} />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
