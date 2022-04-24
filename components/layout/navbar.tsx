import {
  Flex,
  useColorMode,
  Button,
  Container,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { BsMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxWidht={"container.lg"}>
        <Flex
          height={"20"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <Moon /> : <Sun />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
