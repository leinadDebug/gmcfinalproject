import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <div>
      <VStack spacing={"5px"} color={"blanchedalmond"} gap={3}>
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

        <Button
          variant={"solid"}
          color={"white"}
          colorScheme="red"
          w={"100%"}
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("guest@sample.com");
            setPassword("12345");
          }}>
          Get the Guest User Credentials
        </Button>

        <Button
          color={"white"}
          colorScheme="orange"
          w={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}>
          Log In
        </Button>
      </VStack>
    </div>
  );
}
