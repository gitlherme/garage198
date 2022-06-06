import { Text, VStack } from "@chakra-ui/react";

export function OpeningHours() {
  return (
    <VStack py="4">
      <Text as="h2"
        fontFamily="primary"
        fontSize="2xl"
        textAlign="center"
        fontWeight="bold"
      >
        Horário de funcionamento
      </Text>
      <Text as="span"
        fontFamily="secondary"
        fontSize="xl"
        textAlign="center"
      >
        Segunda a sábado
      </Text>
      <Text as="span"
        fontFamily="secondary"
        fontSize="xl"
        textAlign="center"
      >
        Das 9:00 às 18:00
      </Text>
    </VStack>
  )
}