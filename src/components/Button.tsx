import { Link } from "@chakra-ui/react";

interface Button {
  title: string,
  href: string
}


export function Button({ title, href }: Button) {
  return (
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
          href={href}
        >
          { title } 
        </Link>
  )
}