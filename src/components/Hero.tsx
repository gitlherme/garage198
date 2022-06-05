import { Flex, Link, Text, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      bg="brand.blue900"
      color="white"
      h="80vh"
      align="center"
    >
      <VStack align="left" px="8" gap="2" maxW={700}>
        <Text 
          as="h1"
          fontFamily="primary"
          fontWeight="900"
          fontSize="7xl"
          textTransform="uppercase"
          lineHeight="4rem"
        >
          Barbearia Garage 198
        </Text>
        <Text
          as="p"
          fontFamily="secondary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae, inventore quam placeat error esse consectetur labore dolores saepe sed commodi reiciendis omnis dolorum quo deserunt tenetur ab non asperiores?
        </Text>
        <Link
          colorScheme="yellow"
          w="150px"
          fontFamily="secondary"
          fontSize="1.1rem"
          bg="yellow.400"
          color="black"
          fontWeight="bold"
          textAlign="center"
          py="2"
          _hover={{
            textDecoration: 'none',
            bgColor: 'yellow.500'
          }}
        >
          Agendar 
        </Link>
      </VStack>
    </Flex>
  )
}