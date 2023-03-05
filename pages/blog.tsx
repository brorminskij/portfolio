import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Heading,
  Grid,
  SlideFade,
} from "@chakra-ui/react";

import { createClient } from "contentful";
import { BlogCard } from "../components/BlogCard";
import Paragraph from "../components/Paragraph";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "article" });

  return {
    props: {
      articles: res.items,
    },
  };
}
export const Blog = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Alexander Borminskij | Blog</title>
        <meta name="description" content="Alexander Borminskij | Developer" />
        <link rel="shortcut icon" href="/favicon.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://borminskij.com" />
        <meta property="og:title" content="Alexander Borminskij | Developer" />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                My blog
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                You will find some of the most amazing content here on my blog.
                Updated daily, weekly or yearly. It all depends.
              </Paragraph>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <Grid
            justifyItems="center"
            mt={10}
            templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
            gap={20}
          >
            {articles.map((article) => (
              <BlogCard key={article.sys.id} article={article} />
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Blog;
