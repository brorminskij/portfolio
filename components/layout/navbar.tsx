import React from "react";
import {
  Flex,
  useColorMode,
  Button,
  Container,
  useDisclosure,
  IconButton,
  Box,
  Stack,
  HStack,
  Center,
} from "@chakra-ui/react";
import { BsMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "./link";
import Image from "next/image";
import logo from "../../public/wolf2.png";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let router = useRouter();
  let { asPath } = router;

  const Links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About me",
      route: "/about",
    },
  ];

  const navLinks = (
    <>
      {Links.map((link) => (
        <Link
          href={link.route}
          key={link.name}
          p={2}
          rounded={"md"}
          currentPath={asPath}
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <Box py={5} borderTop="2px" borderTopColor="purple.500">
        <Container maxWidth={"container.lg"}>
          <Flex
            height={"16"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              aria-label="Navigation"
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              display={{ md: !isOpen ? "none" : "inherit" }}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Center className="logo">
                <Image src={logo} width={32} height={32} alt="wolf logo" />
              </Center>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {navLinks}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button onClick={toggleColorMode} aria-label="dark/light mode">
                {colorMode === "light" ? <Moon /> : <Sun />}
              </Button>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} mt={3}>
              <Stack as={"nav"} spacing={4}>
                {navLinks}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};
