import { Flex } from "@chakra-ui/react";
import { NavItem } from "../atoms/NavItem";
import { Navigation } from "../molecules/Navigation";

export function Header() {
  return (
    <Flex w="100vw" py="4" align="center" justify="space-around" bgColor="brand.blue900" color="whiteAlpha.900">
      <Navigation>
        <NavItem href="google.com">Home</NavItem>
        <NavItem href="google.com">A Barbearia</NavItem>
        <NavItem href="google.com">Preços</NavItem>
        <NavItem href="google.com">Contato</NavItem>
      </Navigation>
      <Navigation>
        <NavItem href="google.com">Quero agendar</NavItem>
      </Navigation>
    </Flex>
  )
}