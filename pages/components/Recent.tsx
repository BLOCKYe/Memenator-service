import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { Meme } from "./Meme";
import {
  Box,
  Text,
  Heading,
  Button,
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Input,
  PopoverArrow,
  PopoverCloseButton,
  Image,
  useToast,
} from "@chakra-ui/react";

import "firebase/compat/firestore";
import "firebase/compat/storage";
import firebase from "../../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { v4 } from "uuid";

const firestore = firebase.firestore();

export const Recent: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputImage, setinputImage]: any = useState("");
  const [file, setFile] = useState() as any;
  const toast = useToast();

  const memesRef = firestore.collection("memes");
  const [memeData] = useCollectionData(memesRef);

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 40) setInputTitle(e.target.value);
  };

  const handleInputImage = async (e: any) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setinputImage(objectUrl);
    setFile(e.target.files[0]);
    setInputTitle(e.target.files[0].name);
  };

  const clearUploadField = () => {
    setinputImage("");
    setInputTitle("");
  };

  const submitUpload = async () => {
    if (inputImage !== "") {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const image = await fileRef.getDownloadURL();

      const test = v4();

      await memesRef.doc(test).set({
        id: test,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        meme: image,
        title: inputTitle,
        likes: 0,
      });

      toast({
        title: "You successfully uploaded a meme!",
        description: "Thank you!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      clearUploadField();
    }
  };

  return (
    <Box
      bg="gray.900"
      h="100%"
      w="100%"
      p={{ base: 5, xl: "17%", lg: "13%" }}
      pt={{ base: 5, xl: "5%" }}
      color="white"
      letterSpacing="0.3px"
      display="flex"
      gridTemplateColumns="1fr 1fr"
      flexDirection="column"
      alignItems="center"
      borderTop={{ lg: "1px" }}
      borderColor={{ lg: "gray.700" }}
    >
      <Box flexDirection={{ base: "column", lg: "row" }} display="flex" justifySelf="center" alignItems="center">
        <Box alignItems={{ base: "center", lg: "start" }} display="flex" flexDirection="column" width="100%">
          <Heading textAlign="center" fontSize={{ base: "4xl", xl: "5xl" }} mt={{ base: 12, lg: 0 }} color="white">
            Recent memes
          </Heading>

          <Text
            mt={3}
            textAlign={{ base: "center", lg: "start" }}
            color="whiteAlpha.700"
            width={{ base: "95%", xl: "60%" }}
            fontSize="l"
          >
            Nam eleifend magna purus, vel tempor dolor dignissim id. Nullam volutpat ipsum feugiat luctus sodales. Vestibulum
            neque tellus, commodo et nisl sed, efficitur finibus.
          </Text>
        </Box>

        <Popover>
          <PopoverTrigger>
            <Button
              _focus={{ outline: "none" }}
              _hover={{ bg: "whiteAlpha.300" }}
              variant="outline"
              mt={5}
              p={5}
              fontSize="m"
              leftIcon={<MdLibraryAdd />}
            >
              Upload meme
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w={{ base: "280px", sm: "350px" }} p={3}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader display="flex" flexDirection="column" alignItems="center" fontWeight="bold" p={3} textAlign="center">
                {inputImage === "" ? <Box>Select file</Box> : <Image borderRadius="xl" src={inputImage} alt="preview" />}
              </PopoverHeader>
              <PopoverBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                boxShadow="rgba(114, 51, 255, 0.15) 0px 28px 50px 0px"
              >
                <input onChange={handleInputImage} className="inputFile" type="file" accept="image/png, image/jpeg"></input>
                <Input
                  onChange={handleInputTitle}
                  value={inputTitle}
                  mt={3}
                  _focus={{
                    borderBottomColor: "#7233FF",
                    borderBottomWidth: "2px",
                  }}
                  textAlign="center"
                  variant="flushed"
                  placeholder="Set title"
                />
                <Button onClick={submitUpload} mt={5} bg="#fbfbff" variant="solid">
                  Upload meme
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>

      <Box
        mt={12}
        display={{ base: "flex", lg: "grid" }}
        gap={8}
        //gridTemplateColumns={{ xl: "1fr 1fr 1fr", lg: "1fr 1fr" }}
        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
        flexDirection="column"
      >
        <Box>
          {memeData?.slice(0, memeData.length / 3).map((meme: any) => (
            <Meme date={meme.createdAt} key={meme.meme} title={meme.title} meme={meme.meme} likes={meme.likes} id={meme.id} />
          ))}
        </Box>
        <Box>
          {memeData?.slice(memeData.length / 3, (memeData.length / 3) * 2).map((meme: any) => (
            <Meme date={meme.createdAt} key={meme.meme} title={meme.title} meme={meme.meme} likes={meme.likes} id={meme.id} />
          ))}
        </Box>
        <Box>
          {memeData?.slice((memeData.length / 3) * 2, memeData.length).map((meme: any) => (
            <Meme date={meme.createdAt} key={meme.meme} title={meme.title} meme={meme.meme} likes={meme.likes} id={meme.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Recent;
