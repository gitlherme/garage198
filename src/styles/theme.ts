// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    blue500: "#030A8C",
    blue700: "#020659",
    blue900: "#011126",
    yellow: "#F2B705",
    orange: "#F27405"
  }
}

const fonts = {
  primary: "Playfair Display, serif",
  secondary: "Montserrat, sans-serif"
}

export const theme = extendTheme({ colors, fonts })