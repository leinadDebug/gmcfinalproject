import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../component/Authentication/Login";
import Signup from "../component/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent m="auto">
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        w="100%"
        p={4}
        borderColor={"green.300"}
        borderRadius={"xl"}
        borderWidth={"1px"}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <Box
            d="flex"
            justifyContent="center"
            w="100%"
            m="10px auto 50px auto"
            borderRadius={"2xl"}
            borderWidth={" 1px"}
            p={3}
            bg={"rgba(1, 1, 1, 0.6)"}>
            <Text
              colorScheme="white"
              fontSize={"2xl"}
              fontWeight={"bold"}
              fontFamily={"Playfair"}
              padding={"2.5"}
              color={"green.200"}
              letterSpacing={"5px"}>
              Whispering_Cabinet
            </Text>
          </Box>
          <TabList mb={"2em"} py={4} gap={2}>
            <Tab fontStyle={"italic"} bg={""} color={"green.300"} width={"30%"}>
              Log In
            </Tab>
            <Tab fontStyle={"italic"} bg={""} color={"green.300"} width={"30%"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
