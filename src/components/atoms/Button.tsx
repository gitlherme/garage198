import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"

interface IButtonProps extends ButtonProps {
  variant?: string
  children: React.ReactNode
}

export function Button({ variant, children }: IButtonProps) {
  return (
    <ChakraButton background="brand.blue500" color="brand.orange">
      { children }
    </ChakraButton>  
  )
}