import {
  Heading,
  SlideFade,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2022
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.500" />
          Developer at <Link href="https://entire.se">Entire</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.500" />
          Graduated from{" "}
          <Link href="https://www.jensenyh.se/vara-utbildningar/frontendutvecklare">
            polytechnic school
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.500" />
          Internship at <Link href="https://entire.se/">Entire</Link>
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.500" />
          Team Manager at <Link href="https://tiktok.com">TikTok</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.500" />
          Internship at <Link href="https://www.trustanchorgroup.com">TAG</Link>
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;
