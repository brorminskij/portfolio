import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

export type ToolProps = {
  tool: {
    name: string;
    description: string;
    icon: JSX.Element;
    url: string;
  };
};

const ToolCard = ({ tool }: ToolProps) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
          borderColor: "purple.500",
        }}
      >
        <IconButton
          as="a"
          href={tool.url}
          rel="noopener"
          target="_blank"
          aria-label={tool.name}
          mr={3}
          _groupHover={{ color: "purple.500" }}
          icon={tool.icon}
        />
        <Box>
          <LinkOverlay href={tool.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {tool.name}
            </Heading>
            <Paragraph>{tool.description}</Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default ToolCard;
