import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

export function Footer() {
  return (
    <Flex w="100%"
      bg="brand.yellow"
      align="center"
      py={16}
      color="brand.blue900"
      fontFamily="secondary"
      direction="column"
      gap="4"
    >
      <Text as="span">Barbearia Garage 198 - 2022</Text>
      <Flex align="center" gap="4">
        <Link href="https://www.instagram.com/garage___198/"
          _hover={{
            color: "brand.orange"
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
      </Flex>
    </Flex>
  )
}