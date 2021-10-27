import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { Link } from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Head from "next/head";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "../../firebase/clientApp";
import { useDocument } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

const CharacterPage: React.FC = () => {
  const toast = useToast();
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

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);

    toast({
      title: "Link copied to clipboard!",
      description: "You can share meme!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const [value, loading, error] = useDocument(firebase.firestore().doc(`memes/${id}`));
  console.log(value?.data());

  return (
    <div>
      <Head>
        <title>Memenator - {value?.data().title}</title>
        <meta name="description" content="(:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="gray.900" w="100%" h="100%" minH="100vh">
        <Box p={12} display="flex" w="100%" justifyContent="center" flexDirection="column" alignItems="center">
          <Link href="/">
            <Button
              colorScheme="whiteAlpha"
              _focus={{ outline: "none" }}
              variant="outline"
              mb={5}
              p={5}
              leftIcon={<FaLongArrowAltLeft display="flex" />}
            >
              Back to main page
            </Button>
          </Link>

          <Box overflow="hidden" borderWidth={{ sm: "1px" }} borderRadius="xl" borderColor="gray.700">
            <Image borderRadius={{base: "xl", sm: "unset"}} maxW="xl" w="100%" src={value?.data().meme}></Image>
            <Box p={{base: 5, sm: 12}} display="flex" flexDirection="column" alignItems="center" maxW="xl" bg={{ sm: "gray.800" }}>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                {value?.data().title}
              </Text>

              <Box
                mt={5}
                pt={5}
                borderTop="1px"
                borderColor="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
              >
                <Button
                  colorScheme={like !== 0 ? "whiteAlpha" : "purple"}
                  _focus={{ outline: "none" }}
                  variant="outline"
                  mt={5}
                  p={5}
                  mr={1}
                  leftIcon={<AiFillHeart display="flex" />}
                  onClick={giveLike}
                >
                  {value?.data().likes} Likes
                </Button>

                <Button
                  colorScheme="whiteAlpha"
                  _focus={{ outline: "none" }}
                  variant="outline"
                  mt={5}
                  p={5}
                  ml={1}
                  leftIcon={<IoShareSocialSharp display="flex" />}
                  onClick={shareLink}
                >
                  Share
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default CharacterPage;
