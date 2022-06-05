import { Link, ListItem } from "@chakra-ui/react"

interface INavItemProps {
  href: string,
  children: React.ReactNode
}

export function NavItem({ href, children }: INavItemProps) {
  return (
    <ListItem fontFamily="primary" fontSize="1.5rem" letterSpacing="2px">
      <Link href={href} _hover={{
        textDecoration: "none",
        color: "brand.yellow"
      }}>{children}</Link>
    </ListItem>
  )
}