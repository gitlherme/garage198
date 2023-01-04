import { Box, Text, VStack } from "@chakra-ui/react";

export function OpeningHours() {
  return (
    <VStack pt={["8", "16"]} id="opening">
      <Text as="h2"
        fontFamily="primary"
        fontSize="3xl"
        textAlign="center"
        fontWeight="bold"
        letterSpacing={1}
      >
        Horário de funcionamento
      </Text>
      <VStack>
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
          pb={["8", "16"]}
        >
          Das 11:00 às 21:00
        </Text>
      </VStack>
      <Box w="100%" h="600">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.68517182443!2d-46.382276785220775!3d-23.507846684709428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65c4e270e215%3A0x8dafc13bd2722d5d!2sBarbearia%20Garage%20198!5e0!3m2!1spt-BR!2sbr!4v1654662848988!5m2!1spt-BR!2sbr" width="100%" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </VStack>
  )
}
