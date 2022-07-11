import React, { useState } from "react";
import {
  Box,
  Heading,
  SlideFade,
  LightMode,
  Button,
  ButtonGroup,
  useBoolean,
} from "@chakra-ui/react";
const Profile = () => {
  const [toggle, setToggle] = useBoolean();
  const [welcomeMessage, setWelcomeMessage] = useState([
    "Full-stack developer by day, software enthusiast by night. ",
    "Interested in the whole frontend sprectrum and everything it has to offer!",
  ]);

  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
          _hover={{ cursor: "pointer" }}
          onClick={setToggle.toggle}
        >
          Hey, I'm {!toggle ? "Alexander" : "Borminskij"}!
        </Heading>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Button
                colorScheme="purple"
                bg="purple.500"
                href="mailto:alexander.borminskij@gmail.com"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaEnvelope />}
                aria-label="email"
              >
                Email
              </Button>
              <Button
                colorScheme="purple"
                bg="purple.500"
                href="https://www.linkedin.com/in/borminskij"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaLinkedin />}
                aria-label="linkedin"
              >
                Linkedin
              </Button>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
