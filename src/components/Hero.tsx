import { Flex, Text, VStack } from "@chakra-ui/react";
import { Button } from "./Button";

export function Hero() {
  return (
    <Flex
      bgImage="url(hero-bg.png)"
      bgPosition="center"
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
          lineHeight="5rem"
          letterSpacing={2}
        >
          <Text>Barbearia</Text>
          <Text>Garage 198</Text>
        </Text>
        <Text
          as="p"
          fontFamily="secondary"
        >
          A Barbearia Garage198 vem com a finalidade de trazer conforto e lazer. Para isso, foi preciso fazer uma transformação em nossa garagem, que ficou espetacular! Tudo pensado para o cliente se sentir em casa. Com alguns móveis reformados, temos uma aparência vintage, que era nosso objetivo. 
        </Text>
        <Button title="Agendar" href="https://api.whatsapp.com/send?phone=5511930003693&text=Ol%C3%A1%2C+gostaria+de+agendar+um+hor%C3%A1rio%21" />
      </VStack>
    </Flex>
  )
}