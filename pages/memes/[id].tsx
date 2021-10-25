import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Icon } from "@chakra-ui/icon";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "../../firebase/clientApp";
import { useDocument } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

const CharacterPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [like, setLike] = useState(1);

  const giveLike = async () => {
    await firestore
      .collection("memes")
      .doc(`${id}`)
      .update({ likes: value?.data().likes + like });
    setLike(0);
  };

  const [value, loading, error] = useDocument(firebase.firestore().doc(`memes/${id}`));
  console.log(value?.data());

  return (
    <Box bg="gray.900" w="100%" h="100%">
      <Box p={12} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Box overflow="hidden" borderWidth="1px" borderRadius="xl" borderColor="gray.700">
          <Image w="xl" src={value?.data().meme}></Image>
          <Box p={12} display="flex" flexDirection="column" alignItems="center" w="xl" bg="gray.800">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              {value?.data().title}
            </Text>
            <Box mt={3} display="flex" alignItems="center">
              <Icon
                color={like !== 0 ? "whiteAlpha.700" : "purple.400"}
                as={AiFillHeart}
                _hover={{ color: "purple.400", cursor: "pointer" }}
                onClick={giveLike}
              />
              <Text fontWeight="bold" color="white" _hover={{ cursor: "pointer" }} onClick={giveLike} ml={1} justifySelf="end">
                {value?.data().likes} Likes
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CharacterPage;
