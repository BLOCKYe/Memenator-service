import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Box, Image, Text } from "@chakra-ui/react";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";

import firebase from "../../firebase/clientApp";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firestore = firebase.firestore();

interface Props {
  title: string;
  meme: string;
  likes: number;
  id: string;
  date: Date;
}

export const Meme: React.FC<Props> = (props) => {
  const [like, setLike] = useState(1);
  const toast = useToast();

  const giveLike = async () => {
    await firestore
      .collection("memes")
      .doc(props.id)
      .update({ likes: props.likes + like });
    setLike(0);
  };

  const shareLink = () => {
    navigator.clipboard.writeText(`${window.location.href}memes/${props.id}`);

    toast({
      title: "Link copied to clipboard!",
      description: "You can share meme!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

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
      <Link maxH="m" w="100%" href={`/memes/${props.id}`}>
        <Image maxH="m" w="100%" src={props.meme} alt={props.title}></Image>{" "}
      </Link>
      <Text color="whiteAlpha.900" fontWeight="bold" fontSize="sm" pt={5} pb={5}>
        {props.title}
      </Text>
      <Box
        borderTop="1px" 
        borderColor="gray.700" 
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt={5}
        mb={5}
      >
        <Button
          colorScheme="whiteAlpha"
          _focus={{ outline: "none" }}
          variant="outline"
          leftIcon={<IoShareSocialSharp display="flex" />}
          mr={3}
          onClick={shareLink}
        >
          <Text fontSize=".7rem">Share</Text>
        </Button>

        <Button
          colorScheme={like !== 0 ? "whiteAlpha" : "purple"}
          _hover={{ bg: `${like !== 0 ? "whiteAlpha.100" : "purple.900"}` }}
          _focus={{ outline: "none" }}
          variant="outline"
          leftIcon={<AiFillHeart display="flex" />}
          onClick={giveLike}
          ml={3}
        >
          {props.likes}
        </Button>
      </Box>
    </Box>
  );
};

export default Meme;