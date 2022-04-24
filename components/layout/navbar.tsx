<<<<<<< Updated upstream
import { Flex, useColorMode, Button, Container } from "@chakra-ui/react";
=======
import React, { useRef } from "react";
import {
  Flex,
  useColorMode,
  Button,
  Container,
  useDisclosure,
  IconButton,
  Box,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Link,
  VStack,
  Center,
  HStack,
} from "@chakra-ui/react";
>>>>>>> Stashed changes
import { BsMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
<<<<<<< Updated upstream

  return (
    <>
      <Container maxWidht={"container.lg"}>
        <Flex height={"20"} alignItems={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <Moon /> : <Sun />}
          </Button>
=======
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Container maxWidth={"container.lg"}>
        <Flex
          height={"20"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            ref={btnRef}
          />
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <Moon /> : <Sun />}
            </Button>
          </Flex>
>>>>>>> Stashed changes
        </Flex>
        {isOpen ? (
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            blockScrollOnMount
          >
            <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader />

              <DrawerBody alignSelf={"center"}>
                <Center>
                  <Stack>
                    <Link rounded={"md"} p={2}>
                      {"Home"}
                    </Link>
                    <Link rounded={"md"} p={2}>
                      {"About"}
                    </Link>
                    <Link rounded={"md"} p={2}>
                      {"Skills"}
                    </Link>
                  </Stack>
                </Center>
              </DrawerBody>
              <DrawerFooter />
            </DrawerContent>
          </Drawer>
        ) : null}
      </Container>
    </>
  );
};
