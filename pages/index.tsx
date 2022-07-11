import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import Profile from "/components/pages/index/Profile";
export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Alexander Borminskij | Home</title>
        <meta
          name="description"
          content="Alexander Borminskij | Front End Developer"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://borminskij.com" />
        <meta name="color-scheme" content="dark" />
        <meta
          property="og:title"
          content="Alexander Borminskij | Front End Developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
        </Container>
      </main>
    </div>
  );
}

export default Home
