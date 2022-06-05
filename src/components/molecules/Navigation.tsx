import { List } from "@chakra-ui/react"

interface INavigationProps {
  children: React.ReactNode
}

export function Navigation({ children }: INavigationProps) {
  return (
    <List display="flex" gap="4">
      {children}
    </List>
  )
}