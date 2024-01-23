import { Button as ChakraButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Button(props) {
  if (props.href) {
    return <Link to={props.href}>
    <PrimaryButtonComponent {...props} />
    </Link>
  }
  return (
    <PrimaryButtonComponent {...props} />
  );
}

Button.Secondary = (props) => {
  if (props.href) {
    return <Link to={props.href}>
    <ChakraButton p="20px 40px" fontWeight="medium" bg="white" borderRadius={{base: "14px", md: "12px"}} display="flex" alignItems="center" gap="3" textColor="primary" _hover={{bg: "othersLight"}} _active={{bg: "primaryLightest"}} _disabled={{bg: "white", textColor: "disabled", borderColor: "naruralLight"}} fontSize="20px" variant="outline" w="full" {...props} />
    </Link>
  }
  return <ChakraButton p="20px 40px" fontWeight="medium" bg="white" borderRadius={{base: "14px", md: "12px"}} display="flex" alignItems="center" gap="3" textColor="primary" _hover={{bg: "othersLight"}} _active={{bg: "primaryLightest"}} _disabled={{bg: "white", textColor: "disabled", borderColor: "naruralLight"}} fontSize="20px" variant="outline" w="full" {...props} />
}

const PrimaryButtonComponent = (props) => {
  return <ChakraButton maxW={"420px"} display="flex" gap="3" p="20px 40px" h="52px" borderRadius={{base: "14px", md: "12px"}} bg="primary" _hover={{bg: "primaryLight"}} _active={{bg: "primaryDark"}} _disabled={{bg: "disabled"}} textColor="white" fontSize="20px" fontWeight="medium" variant="solid" w="full" {...props} />
}

Button.TextButton = (props) => {
  if (props.href) {
    return <Link to={props.href}>
    <ChakraButton w="max" py="0" fontWeight="normal" display="flex" alignItems="center" gap="2" textColor="primary" variant="link" style={{textDecoration: "none"}} {...props} />
    </Link>
  }
  return <ChakraButton w="max" py="0" fontWeight="normal" display="flex" alignItems="center" gap="2" textColor="primary" variant="link" style={{textDecoration: "none"}} {...props} />
}