import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { ReactChild } from "react";

type LinkProps = {
  children: ReactChild;
  href: string;
  currentPath: any;
  rounded: string;
  onClick: () => void;
  p: number;
};

const Link = ({ children, href, currentPath, ...props }: LinkProps) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <ChakraLink
        bg={href === currentPath && useColorModeValue("gray.100", "gray.700")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
