import { Text, VStack } from "@chakra-ui/react";
import { ServiceItem } from "./ServiceItem";
export function Services() {
  return (
    <VStack
      bg="brand.blue900"
      py="8"
      gap="8"
      id="services"
    >
      <Text as="h2"
        fontFamily="primary"
        fontSize="4xl"
        textAlign="center"
        fontWeight="bold"
        color="white"
        letterSpacing={1}
        textTransform="uppercase"
      >
        Nossos Serviços
      </Text>
      <ServiceItem title="Pézinho" price={10.00}/>
      <ServiceItem title="Sobrancelha" price={10.00}/>
      <ServiceItem title="Barba" price={20.00}/>
      <ServiceItem title="Corte simples" price={20.00}/>
      <ServiceItem title="Corte degradê" price={25.00}/>
      <ServiceItem title="Corte simples e sobrancelha" price={25.00}/>
      <ServiceItem title="Corte degradê e sobrancelha" price={30.00}/>
      <ServiceItem title="Corte simples + Dimil" price={35.00}/>
      <ServiceItem title="Corte degradê + Dimil" price={40.00}/>
      <ServiceItem title="Corte + Tintura" price={45.00}/>
      <ServiceItem title="Corte + Relaxamento" price={50.00}/>
      <ServiceItem title="Corte + Botox" price={60.00}/>
      <ServiceItem title="Corte + Progressiva" price={60.00}/>
      <ServiceItem title="Corte + Luzes" price={60.00}/>
      <ServiceItem title="Corte + Descoloração Global" price={70.00}/>
    </VStack>
  )
}