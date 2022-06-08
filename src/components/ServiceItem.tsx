import { Flex, Text, VStack } from "@chakra-ui/react";

interface ServiceItemProps {
  title: string,
  price: number
}

export function ServiceItem({title, price}: ServiceItemProps) {
  return (
    <VStack 
        w={["100%", "100%", 800]}
        borderBottom="1px solid white"
        pb="4"
      >
        <Flex w="100%"
          justify="space-between"
          color="white"
          fontSize="lg"
          fontFamily="secondary"
          px="4"
        >
          <Text>{ title }</Text>
          <Text>R${price}</Text>
        </Flex>
      </VStack>
  )
}