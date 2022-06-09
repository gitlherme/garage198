import { Flex, Icon, Link, Text } from "@chakra-ui/react";
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
      <Flex>
        <Link href="https://www.instagram.com/garage___198/"
          _hover={{
            color: "brand.orange"
          }}
        >
          <Icon as={RiInstagramLine} fontSize="2rem" />
        </Link>
      </Flex>
    </Flex>
  )
}