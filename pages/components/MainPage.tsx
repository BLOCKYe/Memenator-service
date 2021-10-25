import React, { useState } from "react";
// icons
import { MdCloudUpload } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "../../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

export const MainPage: React.FC = () => {
  const memesRef = firestore.collection("memes");
  const [memeData] = useCollectionData(memesRef);

  return (
    <Box
      bg="gray.900"
      h={{ base: "100%", xl: "90vh" }}
      w="100%"
      p={{ base: 5, xl: "17%", lg: "13%" }}
      color="white"
      letterSpacing="0.3px"
      display="flex"
      alignItems="center"
    >
      <Box display={{ lg: "grid" }} gridTemplateColumns="1fr 1fr" alignItems="center">
        <Box
          alignItems={{ base: "center", lg: "start" }}
          display="flex"
          flexDirection="column"
          justifySelf="end"
          width={{ xl: "100%" }}
        >
          <Heading fontSize={{ base: "4xl", xl: "5xl" }} mt={{ base: 24, lg: 0 }} color="white">
            Memenator
          </Heading>

          <Text
            mt={3}
            textAlign={{ base: "center", lg: "start" }}
            color="whiteAlpha.700"
            width={{ base: "95%", xl: "90%" }}
            fontSize="l"
          >
            Nam eleifend magna purus, vel tempor dolor dignissim id. Nullam volutpat ipsum feugiat luctus sodales. Vestibulum
            neque tellus, commodo et nisl sed, efficitur finibus ex.
          </Text>

          <Text mt={12} display="flex" color="whiteAlpha.700">
            Uploaded memes:
            <Text fontWeight="bold" ml={2} color="white">
              {memeData?.length}
            </Text>
          </Text>

          <Button
            _focus={{ outline: "none" }}
            _hover={{ bg: "whiteAlpha.300" }}
            variant="outline"
            mt={5}
            p={5}
            rightIcon={<FaLongArrowAltRight display="flex" />}
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: 600,
                behavior: "smooth",
              })
            }
          >
            Let'start
          </Button>
        </Box>

        <Box alignItems="center" display="flex" flexDirection="column" justifySelf="start" width={{ base: "100%", xl: "100%" }}>
          <Box
            borderRadius="xl"
            display="grid"
            gridTemplateColumns="1fr 0fr"
            p={7}
            pt={6}
            pb={6}
            ml={{ xl: "-70px" }}
            bg="#7233FF"
            mt={{ base: 12, lg: 0 }}
            w="100%"
            alignItems="center"
            maxW="sm"
            boxShadow="rgba(114, 51, 255, 0.15) 0px 28px 50px 0px;"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Easy to upload
              </Text>
              <Text fontSize="sm" color="whiteAlpha.500">
                Just select image from your device
              </Text>
            </Box>
            <Box fontSize={{ base: "2xl", sm: "4xl" }} justifySelf="end">
              <MdCloudUpload />
            </Box>
          </Box>

          <Box
            borderRadius="xl"
            display="grid"
            gridTemplateColumns="1fr 0fr"
            p={7}
            pt={6}
            pb={6}
            bg="white"
            mt={5}
            w="100%"
            alignItems="center"
            color="gray.900"
            maxW="sm"
            boxShadow="rgba(114, 51, 255, 0.15) 0px 28px 50px 0px;"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Free to watch
              </Text>
              <Text fontSize="sm" color="gray.500">
                Watch any meme you want
              </Text>
            </Box>
            <Box fontSize={{ base: "2xl", sm: "4xl" }} justifySelf="end">
              <BsEmojiSunglassesFill />
            </Box>
          </Box>

          <Box
            borderRadius="xl"
            display="grid"
            gridTemplateColumns="1fr 0fr"
            p={7}
            pt={6}
            pb={6}
            bg="#7233FF"
            mt={5}
            ml={{ xl: "-40px" }}
            w="100%"
            alignItems="center"
            maxW="sm"
            boxShadow="rgba(114, 51, 255, 0.15) 0px 28px 50px 0px;"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Share with one click
              </Text>
              <Text fontSize="sm" color="whiteAlpha.500">
                Share memes with your friends
              </Text>
            </Box>
            <Box fontSize={{ base: "2xl", sm: "4xl" }} justifySelf="end">
              <IoShareSocialSharp />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
