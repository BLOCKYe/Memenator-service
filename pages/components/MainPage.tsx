import React from "react";
// icons
import { MdLibraryAdd, MdCloudUpload } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { Box, Text, Heading, Button } from "@chakra-ui/react";

export const MainPage: React.FC = () => {
  return (
    <Box
      bg="gray.900"
      h="100%"
      w="100vw"
      p={{ base: 5, xl: "10%", lg: "10%" }}
      color="white"
      letterSpacing="0.3px"
      display="flex"
      alignItems="center"
    >
      <Box
        display={{ lg: "grid" }}
        gridTemplateColumns="1fr 1fr"
        alignItems="center"
      >
        <Box
          alignItems={{ base: "center", lg: "start" }}
          display="flex"
          flexDirection="column"
          justifySelf="end"
          width={{ xl: "90%" }}
        >
          <Heading
            fontSize={{ base: "4xl", xl: "5xl" }}
            mt={{ base: 24, lg: 0 }}
            color="white"
          >
            Memenator
          </Heading>

          <Text
            mt={3}
            textAlign={{ base: "center", lg: "start" }}
            color="whiteAlpha.700"
            width={{ base: "95%", xl: "90%" }}
            fontSize="l"
          >
            Nam eleifend magna purus, vel tempor dolor dignissim id. Nullam
            volutpat ipsum feugiat luctus sodales. Vestibulum neque tellus,
            commodo et nisl sed, efficitur finibus ex.
          </Text>

          <Text mt={12} display="flex" color="whiteAlpha.700">
            Uploaded memes:
            <Text fontWeight="bold" ml={2} color="white">
              352
            </Text>
          </Text>

          <Button
            _focus={{ outline: "none" }}
            _hover={{ bg: "whiteAlpha.300" }}
            variant="outline"
            mt={3}
            p={5}
            leftIcon={<MdLibraryAdd />}
          >
            Let'start
          </Button>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifySelf="start"
          width={{ base: "100%", xl: "90%" }}
        >
          <Box
            borderRadius="xl"
            display="grid"
            gridTemplateColumns="1fr 0fr"
            p={7}
            pt={6}
            pb={6}
            bg="#7233FF"
            mt={{ base: 12, lg: 0 }}
            w="100%"
            alignItems="center"
            maxWidth="500px"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Easy to upload
              </Text>
              <Text fontSize="sm" color="whiteAlpha.500">
                Just select image from your device
              </Text>
            </Box>
            <Box fontSize="4xl" justifySelf="end">
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
            maxWidth="500px"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Free to watch
              </Text>
              <Text fontSize="sm" color="gray.500">
                Watch any meme you want
              </Text>
            </Box>
            <Box fontSize="4xl" justifySelf="end">
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
            w="100%"
            alignItems="center"
            maxWidth="500px"
          >
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                Share with one click
              </Text>
              <Text fontSize="sm" color="whiteAlpha.500">
                Share memes with your friends
              </Text>
            </Box>
            <Box fontSize="4xl" justifySelf="end">
              <IoShareSocialSharp />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
