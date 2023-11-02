import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from "../component/Authentication/Login";
import Signup from "../component/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        w="100%"
        m="30px auto 5px auto"
        borderRadius={"2xl"}
        borderWidth={" 1px"}
        p={3}
        bg={'#7C6354'}>
        <Text fontSize={"xl"} fontWeight={"bold"} padding={'2.5'} color={'burlywood'}>
          Whispering_Cabinet
        </Text>
      </Box>
      <Box bg={'#7C6354'} w="100%" p={4} borderRadius={'2xl'} borderWidth={"1px"}><Tabs variant='soft-rounded' colorScheme='orange'>
  <TabList mb={'2em'} py={4} gap={2} >
    <Tab fontStyle={"italic"} color={'burlywood'} width={'30%'}>Log In</Tab>
    <Tab fontStyle={"italic"} color={'burlywood'} width={'30%'}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs></Box>
    </Container>
  );
};

export default Homepage;
