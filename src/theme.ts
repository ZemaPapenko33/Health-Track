import { createTheme, Theme } from '@mui/material'
import {
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions
} from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    lightBlue?: PaletteColorOptions
    white?: PaletteColorOptions
    blackGrey?: PaletteColorOptions
    salad?: PaletteColorOptions
  }
}

declare module '@mui/material' {
  interface ThemeOptions {
    palette?: PaletteOptions
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    lightBlue: PaletteColor
    white: PaletteColor
    blackGrey: PaletteColor
    salad: PaletteColor
  }

  interface Theme {
    palette: Palette
  }
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(100, 182, 172)'
    },
    lightBlue: {
      main: 'rgb(192, 253, 251)'
    },
    white: {
      main: 'rgb(252, 255, 253)'
    },
    blackGrey: {
      main: 'rgb(93, 115, 126)'
    },
    salad: {
      main: 'rgb(218, 255, 239)'
    }
  }
})
