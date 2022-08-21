import ToolCard from "../../ToolCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import Paragraph from "../../Paragraph";

const tools = [
  {
    name: "JavaScript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "NodeJS",
    description: "Built on Chromes's V8 JavaScript engine.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://nodejs.org/en/",
  },
  {
    name: "Databases",
    description: "MySQL, SQLite, MongoDB and Firebase to mention a few.",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "GIT",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.github.com",
  },
  {
    name: "Figma",
    description: "Figma is powerful & easy to use software for UI/UX design.",
    icon: <FaFigma fontSize="20px" />,
    url: "https://www.figma.com/",
  },
];

const Stack = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Tech Stack
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6}></Paragraph>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
