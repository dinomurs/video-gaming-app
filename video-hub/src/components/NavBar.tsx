import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "../assets/SearchInput";

const NavBar = () => {
  return (
    <HStack padding={5}>
      <Image src={logo} boxSize="3rem" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
