import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GalleryItem } from "./GalleryItem";

export function Gallery() {
  return (
    <Flex
      justify="center"
      direction="column"
      py={8}
    >
      <Text as="h2"
        fontFamily="primary"
        fontSize="4xl"
        textAlign="center"
        fontWeight="bold"
        color="brand.yellow"
        letterSpacing={1}
        textTransform="uppercase"
      > Galeria </Text>
      <SimpleGrid
        columns={[2, 3]}
        px={[4, 8, 8, 32, 80]}
        spacing={2}
      >
        <GalleryItem src="gallery/gallery1.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
        <GalleryItem src="gallery/gallery2.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
        <GalleryItem src="gallery/gallery3.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
        <GalleryItem src="gallery/gallery4.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
        <GalleryItem src="gallery/gallery5.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
        <GalleryItem src="gallery/gallery6.jpg" alt="Barbearia Garage 198" title="Barbearia Garage 198" />
      </SimpleGrid>
    </Flex>
  )
}