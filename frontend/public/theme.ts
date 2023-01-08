import { amber, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { makeFontStyles } from '../src/utils/styleSnippets';

const spotUSTheme = createTheme({
  palette: {
    primary: grey,
    secondary: amber,
    text: {
      lightBorder: 'rgba(240, 240, 240, .3)',
      light: '#F0F0F0',
      dark: '#0D1633'
    },
    background: {
      dark: '#0D1633',
      light: '#6081D3'
    }
  },
  typography: {
    fontSize: 12,
    body1: {
      ...makeFontStyles(14, '17px', '#0D1633')
    },
    body2: {
      fontWeight: 700,
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1240,
      lg: 1600,
      xl: 1920,
    }
  },
});

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    white: string;
    lightBorder: string;
    light: string;
    dark: string;
  }

  interface TypeBackground {
    light: string;
    dark: string;
  }
}


export default spotUSTheme;