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
      </Box>
    </SlideFade>
  );
};

export default Profile;
