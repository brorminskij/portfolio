import { Flex, SlideFade, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCard = ({ article }) => {
  const {
    title,
    author,
    slug,
    thumbnail,
    featuredImage,
    publishDate,
    content,
  } = article.fields;
  return (
    <Flex>
      <SlideFade in={true} offsetY={80} delay={0.2}>
        <Image
          alt="Image fetched from contentful"
          src={"https:" + thumbnail.fields.file.url}
          width={334}
          height={188}
        />
        <VStack mt={2}>
          <Text marginRight={"auto"} fontSize={14} opacity={0.6}>
            {publishDate}
          </Text>
        </VStack>
        <Link legacyBehavior href={"/blog/" + slug}>
          <Text fontSize="18px" textTransform="capitalize" cursor="pointer">
            {title}
          </Text>
        </Link>
      </SlideFade>
    </Flex>
  );
};
