import React, { useEffect, useState } from "react";
import { Container, Center, Box, Circle } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <>
      <Container maxW="container.lg" mt={10}>
        <Center>
          <Box>
            <Center>
              <Circle size="40px" bg="purple.500" color="white">
                404
              </Circle>
            </Center>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default NotFound;
