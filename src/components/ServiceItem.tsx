import { Flex, Icon, IconProps } from "@chakra-ui/react";


interface ServiceItemProps extends IconProps {
  title: string
}

export function ServiceItem({ icon, title }: ServiceItemProps) {
  return (
    <Flex>
      <Icon as={icon} />
      <Text as="span">{title}</Text>
    </Flex>
  )
}