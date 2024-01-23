import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React  from "react";

export default function ProductAccordings({ tabs = [] }) {
  return (
    <Accordion allowMultiple borderTop="1px solid #D3D4D8" borderBottom="1px solid #D3D4D8">
      {tabs.map((tab, index) => {
        const Component = () => tab.component;
        return (
          <AccordionComponent key={index} title={tab.name}>
            <Component />
          </AccordionComponent>
        );
      })}
    </Accordion>
  );
}

const AccordionButtonComponent = ({ title }) => {
  return (
    <Flex justifyContent="space-between" w="full" alignItems="center">
      <Text
        fontWeight="medium"
        fontSize="18px"
        lineHeight="20px"
      >
        {title}
      </Text>
      <AccordionIcon color="naturalDark" fontSize="26px" />
    </Flex>
  );
};

const AccordionComponent = ({ title, children }) => {
  return (
    <AccordionItem borderBottom="1px solid #D3D4D8">
      <AccordionButton py="20px" px="0" _hover={{bg: "white"}} color="naturalDarkest" _expanded={{ bg: 'white', color: 'primaryLight' }}>
        <AccordionButtonComponent title={title} />
      </AccordionButton>
      <AccordionPanel p="0">{children}</AccordionPanel>
    </AccordionItem>
  );
};
