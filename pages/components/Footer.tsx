import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box
      bg="gray.900"
      w="100%"
      p={12}
      color="white"
      letterSpacing="0.3px"
      display="flex"
      gridTemplateColumns="1fr 1fr"
      flexDirection="column"
      alignItems="center"
      borderTop={{ lg: "1px" }}
      borderColor={{ lg: "gray.700" }}
    >
      <Heading>Memenator</Heading>
      <Text mt={3} textAlign="center" maxW="3xl" color="whiteAlpha.500">
        Etiam nibh dui, euismod nec nulla quis, ultricies tempor est. Curabitur in dolor pretium, pellentesque leo non, faucibus
        magna. Pellentesque dignissim dignissim nibh, in interdum neque cursus fermentum. Nunc efficitur mollis finibus. Phasellus
        ullamcorper libero sed blandit faucibus.
      </Text>

      <ButtonGroup mt={5} spacing="6">
        <Button colorScheme="facebook" leftIcon={<RiFacebookFill />}>
          Facebook
        </Button>
        <Button colorScheme="twitter" leftIcon={<RiTwitterFill />}>
          Twitter
        </Button>
      </ButtonGroup>
      <Text textAlign="center" fontSize="sm" mt={5}>
        Copyright © 2021 Memenator {"</>"} Created by Dominik Obłoza
      </Text>
    </Box>
  );
};

export default Footer