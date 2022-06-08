import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { RiScissorsFill } from 'react-icons/ri';
export function Services() {
  return (
    <VStack
      bg="brand.blue900"
      py="8"
      gap="8"
    >
      <Text as="h2"
        fontFamily="primary"
        fontSize="2xl"
        textAlign="center"
        fontWeight="bold"
        color="brand.yellow"
      >
        Serviços
      </Text>
      <Flex
        direction={["column", "column", "row"]}
      >
        <VStack
          fontFamily="secondary"
          color="brand.yellow"
        >
          <Icon as={RiScissorsFill} fontSize="4xl" />
          <Text as="span" fontSize="2xl">Corte</Text>
        </VStack>
      </Flex>
    </VStack>
  )
}