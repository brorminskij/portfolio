import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Center, Box, Circle } from "@chakra-ui/react";

const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <>
      <Container maxW="container.lg" mt={10}>
        <Center>
          <Box>
            <Center>
              <Circle size="40px" bg="purple.500" color="white">
                {counter}
              </Circle>
            </Center>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default NotFound;
