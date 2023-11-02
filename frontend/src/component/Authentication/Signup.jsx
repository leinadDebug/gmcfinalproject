import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setloading] = useState(false);
  const toast = useToast();

  const handleClick = () => {
    setShow(!show);
  };
  const postDetails = (pics) => {
    setloading(true);
    if (pics === undefined) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dhlv2hnt4");
      fetch("https://api.cloudinary.com/v1_1/dhlv2hnt4/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setloading(false);
        })
        .catch((err) => {
          console.error(err);
          setloading(false);
        });
    } else {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      setloading(false);
    }
  };
  const submitHandler = () => {};
  return (
    <VStack spacing={"5px"} color={"blanchedalmond"} gap={4}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => {
            setInput(e.target.value);
          }}></Input>
      </FormControl>
      <FormControl id="e-mail" isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input
          placeholder="Enter your e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}></Input>
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your password"
            type={show ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}></Input>
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.75em"} size={"sm"} onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="ConfirmPassword" isRequired>
        <FormLabel>Confirm password</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}></Input>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          my={2}
          onChange={(e) => postDetails(e.target.files[0])}></Input>
      </FormControl>

      <Button
        color={"white"}
        colorScheme="orange"
        w={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}>
        Sign Up
      </Button>
    </VStack>
  );
}
