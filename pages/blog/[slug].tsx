import { Container, SlideFade } from "@chakra-ui/react";
import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });
  return {
    props: { article: items[0] },
  };
}

const options = {
  renderText: (text) =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
};
  const { featuredImage, title, content } = article.fields;
  return (
    <Container maxW="container.lg">
      <SlideFade in={true} offsetY={80} delay={0.2}>
        <div>
          <div className="banner">
            <Image
              loading="eager"
              src={"https:" + featuredImage.fields.file.url}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
              alt="Image fetched from contentful"
            />
            <h2>{title}</h2>
          </div>
        </div>
      </SlideFade>
    </Container>
  );
};

export default RecipeDetails;
