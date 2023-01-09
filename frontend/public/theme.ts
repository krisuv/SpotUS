import { amber, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { makeFontStyles } from '../src/utils/styleSnippets';

const spotUSTheme = createTheme({
  palette: {
    primary: {
      main: '#A1B0BF',
      contrastText: '#293f54',
      dark: '#7C8D9E',
      light: '#c5d7e8'
    },
    secondary: amber,   
    text: {
      lightBorder: 'rgba(240, 240, 240, .3)',
      light: '#F0F0F0',
      dark: '#0D1633'
    },
    background: {
      dark: '#0D1633',
      light: '#6081D3',
      grey: '#A1B0BF'
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
    grey: string;
  }
}


export default spotUSTheme;