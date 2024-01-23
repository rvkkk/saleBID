import React, { useState } from "react";
import {
  Tab as ChakraTab,
  Tabs as ChakraTabs,
  TabPanel as ChakraTabPanel,
  TabPanels as ChakraTabPanels,
  TabList as ChakraTabList,
  Box,
  Text,
} from "@chakra-ui/react";
import Container from "../Container";
export default function ProductTabs({ tabs = [], defaultIndex = 0 }) {
  const [tabIndex, setTabIndex] = useState(defaultIndex);
  return (
    <ChakraTabs index={tabIndex} onChange={setTabIndex} colorScheme="green">
      <Container>
        <Box py="10" maxW="1420px" mx={{base: "10%", "2xl": "auto"}}>
          <ChakraTabList>
            {tabs.map((tab, index) => {
              return (
                <>
                  <TabComponent active={tabIndex === index} name={tab.name} />
                </>
              );
            })}
          </ChakraTabList>
          <ChakraTabPanels>
            {tabs.map((tab) => {
              const Component = () => tab.component;
              return (
                <ChakraTabPanel>
                  <Component />
                </ChakraTabPanel>
              );
            })}
          </ChakraTabPanels>
        </Box>
      </Container>
    </ChakraTabs>
  );
}

const TabComponent = ({ name, active }) => {
  return (
    <ChakraTab  _selected={{borderColor: "primary"}}>
      <Text color={active ? "primary" : "naturalDarkest"}> {name} </Text>
    </ChakraTab>
  );
};
