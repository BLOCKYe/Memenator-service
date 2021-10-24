import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Box, Image, Stack, Text, Icon } from "@chakra-ui/react";

interface Props {
  title: string;
  meme: string;
  likes: number;
}

export const Meme: React.FC<Props> = (props) => {
  return (
    <Box
      mt={12}
      w={{base: "100%", lg: "90%"}}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        w="100%"
        borderRadius="10px 10px 0px 0px"
        src={props.meme}
        alt={props.title}
      ></Image>
      <Box
        color="gray.900"
        borderRadius="0px 0px 10px 10px"
        p={3}
        pl={5}
        pr={5}
        bg="white"
        alignItems="center"
        w="100%"
        display="grid"
        gridTemplateColumns="1fr 0fr 0fr"
      >
        <Text fontWeight="bold">{props.title}</Text>
        <Icon as={AiFillHeart} />
        <Text fontWeight="bold" ml={3} justifySelf="end">
          {props.likes}
        </Text>
      </Box>
    </Box>
  );
};
