import { Flex, SlideFade, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dateSplit = (publishDate: string) => {
  return publishDate.split("T")[0];
};

export const BlogCard = ({ article }) => {
  const { title, author, slug, thumbnail, publishDate } = article.fields;
  return (
    <Flex cursor="pointer">
      <Link legacyBehavior href={"/blog/" + slug}>
        <SlideFade in={true} offsetY={80} delay={0.2}>
          <Image
            loading="eager"
            src={"https:" + thumbnail.fields.file.url}
            width={556}
            height={278}
            alt="Image fetched from contentful"
          />
          <VStack mt={2}>
            <Text marginRight={"auto"} fontSize={14} opacity={0.6}>
              {dateSplit(publishDate)} by {author}
            </Text>
          </VStack>
          <Text fontSize="18px" textTransform="capitalize" cursor="pointer">
            {title}
          </Text>
        </SlideFade>
      </Link>
    </Flex>
  );
};
