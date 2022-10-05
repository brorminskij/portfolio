import React, { FC, useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  SlideFade,
  Divider,
  Button,
  Collapse,
  LightMode,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";

const About: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const [likes, setLikes] = useState<string[]>(["Tech", "Adventure", "Summer"]);
  const [dislikes, setDislikes] = useState<string[]>([
    "Gas prices",
    "Low Battery",
    "Winter",
  ]);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <Head>
        <title>Alexander Borminskij | About</title>
        <meta name="description" content="Alexander Borminskij | Developer" />
        <link rel="shortcut icon" href="/favicon.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://borminskij.com" />
        <meta property="og:title" content="Alexander Borminskij | Developer" />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                About me
              </Heading>
              <Collapse startingHeight={100} in={show}>
                <Paragraph fontSize="xl" lineHeight={1.6}>
                  My name is Alexander Borminskij and I work as a developer.
                  <br />
                  I live in Sweden but there are many places to call home.
                  <br />I would describe myself as a <strong>
                    CYB
                  </strong>ernetic <strong>ORG</strong>anism who enjoys using
                  the CPU, even referred to as the brain.
                  <br />
                  Guess that's why I'm in this field of work!
                  <br />
                  I enjoy travelling to different places on planet earth with
                  positive energy and without fear.
                  <br />
                  Speaking four languages, programming languages excluded 🤪
                  <br />
                  If you are interested in knowing me more, don't hesitate to
                  contact me!
                </Paragraph>
              </Collapse>
              <LightMode>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  colorScheme="purple"
                  bg="purple.500"
                  aria-label="expand/disband"
                >
                  {show ? "Disband" : "Expand"}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              ✅
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {likes.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="green"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mt={10}
              mb={3}
            >
              🚫
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {dislikes.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="red"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
