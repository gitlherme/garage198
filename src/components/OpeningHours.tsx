import { Text, VStack } from "@chakra-ui/react";

export function OpeningHours() {
  return (
    <VStack py={["8", "16"]}>
      <Text as="h2"
        fontFamily="primary"
        fontSize="3xl"
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
        Das 9:00 às 21:00
      </Text>
    </VStack>
  )
}