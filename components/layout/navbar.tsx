import { Flex, useColorMode, Button, Container } from "@chakra-ui/react";
import { BsMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxWidht={"container.lg"}>
        <Flex height={"20"} alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <Moon /> : <Sun />}
          </Button>
        </Flex>
      </Container>
    </>
  );
};
