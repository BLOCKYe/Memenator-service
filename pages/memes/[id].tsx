import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";

function CharacterPage() {
  const router = useRouter();

  return (
    <Box
      bg="gray.900"
      h={{ base: "100%", xl: "100vh" }}
      w="100%"
      p={{ base: 5, xl: "17%", lg: "13%" }}
      color="white"
      letterSpacing="0.3px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Text>{router.query.id}</Text>
      <Footer />
    </Box>
  );
}

export default CharacterPage;
