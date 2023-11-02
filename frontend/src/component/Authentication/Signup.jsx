import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Signup() {
    const [show, setShow] = useState(false)
    const [input, setInput] = useState()
    const [email, setEmail] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [password, setPassword] = useState()
    const [pics, setPics] = useState()

    const handleClick = () =>{
        setShow(!show)
    }
    const postDetails = () =>{

    }
    const submitHandler =()=>{

    }
  return (
    <VStack spacing={"5px"} color={'blanchedalmond'} gap={4}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" onChange={(e) => {setInput(e.target.value)}}></Input>
        
      </FormControl>
      <FormControl id="e-mail" isRequired>
        <FormLabel>E-mail</FormLabel>
          <Input placeholder="Enter your e-mail" onChange={(e) => {setEmail(e.target.value)}}></Input>
        
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input placeholder="Enter your password" type={show? 'text': 'password'} onChange={(e) => {setPassword(e.target.value)}}></Input>
            <InputRightElement w={'4.5rem'}>
                <Button h={"1.75em"} size={'sm'} onClick={handleClick} >
                    {Show?'hide': 'show'}
                </Button>
            </InputRightElement>
        </InputGroup>
          
        
      </FormControl>
      <FormControl id="ConfirmPassword" isRequired>
        <FormLabel>Confirm password</FormLabel>
          <Input placeholder="Enter your name" onChange={(e) => {setConfirmPassword(e.target.value)}}></Input>  

      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input type="file" p={1.5} accept="image/*" my={2} onChange={(e)=> postDetails(e.target.files[0])}></Input>
      </FormControl>

      <Button color={'white'} colorScheme="orange" w={'100%'} style={{ marginTop: 15}} onClick={submitHandler}>Sign Up</Button>
      
    </VStack>
  );
}
