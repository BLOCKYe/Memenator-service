import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Box, Image, Text, Icon, Badge } from "@chakra-ui/react";
import { IoShareSocialSharp } from "react-icons/io5";

interface Props {
  title: string;
  meme: string;
  likes: number;
}

export const Meme: React.FC<Props> = (props) => {
  return (
    <Box
      mt={12}
      w={{ base: "100%", lg: "90%" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderWidth="1px"
      borderRadius="xl"
      borderColor="gray.700"
      overflow="hidden"
      maxW="sm"
      bg="gray.800"
    >
      <Image maxH="m" w="100%" src={props.meme} alt={props.title}></Image>
      <Box
        p={6}
        pl={5}
        pr={5}
        alignItems="center"
        w="100%"
        display="grid"
        gridTemplateColumns="1fr 0fr 0fr 0fr 0fr 0fr"
      >
        <Text
          color="whiteAlpha.900"
          lineHeight="tight"
          isTruncated
          fontWeight="bold"
          fontSize="sm"
          ml={3}
        >
          {props.title}
        </Text>

        <Badge fontSize="0.7rem" colorScheme="purple">
          New
        </Badge>

        <Icon
          _hover={{ color: "#7233FF", cursor: "pointer" }}
          color="whiteAlpha.700"
          ml={3}
          as={IoShareSocialSharp}
        />
        <Text ml={1} justifySelf="end">
          {props.likes}
        </Text>

        <Icon
          color="whiteAlpha.700"
          ml={3}
          as={AiFillHeart}
          _hover={{ color: "#7233FF", cursor: "pointer" }}
        />
        <Text ml={1} justifySelf="end">
          {props.likes}
        </Text>
      </Box>
    </Box>
  );
};
