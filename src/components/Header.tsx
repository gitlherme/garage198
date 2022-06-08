import { Flex, Icon, Link } from "@chakra-ui/react";
import { RiInstagramLine } from 'react-icons/ri';
export function Header() {
  return (
    <Flex
      bg="transparent"
      position="absolute"
      color="white"
      py="4"
      w="100%"
      justify="space-around"
    >
      <Flex as="nav"
        fontFamily="secondary"
        gap="6"
      >
        <Link href="/" _hover={{
          color: "brand.yellow"
        }}>Início</Link>
        <Link href="#opening" _hover={{
          color: "brand.yellow"
        }}>Horário</Link>
        <Link href="#services" _hover={{
          color: "brand.yellow"
        }}>Serviços</Link>
      </Flex>
      <Link href="https://www.instagram.com/garage___198/"
        _hover={{
          color: "brand.yellow"
        }}
      >
        <Icon as={RiInstagramLine} fontSize="2rem" />
      </Link>
    </Flex>
  )
}