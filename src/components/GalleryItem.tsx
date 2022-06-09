import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, useDisclosure } from "@chakra-ui/react";


interface GalleryItemProps {
  src: string;
  alt?: string;
  title?: string;
}

export function GalleryItem({ src, alt, title }: GalleryItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Image src={src} alt={alt} title={title} onClick={onOpen}
        w={["300px", "300px", "350px", "350px", "400px"]}
        h={["150px", "150px", "200px", "200px", "300px"]}
        transition="all 0.4s"
        _hover={{
          cursor: "pointer",
          filter: "brightness(0.5)"
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={["auto", "4xl"]}>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <Image src={src} alt={alt} title={title} onClick={onOpen} py={16}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}