import { Flex, HStack, Icon, Link } from "@chakra-ui/react";
import { FaTiktok } from 'react-icons/fa';
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
      <HStack gap={4}>
        <Link href="https://www.instagram.com/garage___198/"
          _hover={{
            color: "brand.yellow"
          }}
          isExternal
        >
          <Icon as={RiInstagramLine} fontSize="2rem" />
        </Link>
        <Link href="https://www.tiktok.com/@barbeariagarage198"
          _hover={{
            color: "brand.yellow"
          }}
          isExternal
        >
          <Icon as={FaTiktok} fontSize="1.5rem" />
        </Link>
      </HStack>
    </Flex>
  )
}