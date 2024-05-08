import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Image src={logo} boxSize="3rem" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
