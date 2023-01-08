import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { makeFontStyles } from '../src/utils/styleSnippets';

const spotUSTheme = createTheme({
  palette: {
    primary: purple,
    text: {
      white: '#F0F0F0',
      dark: '#0D1633'
    }
  },
  typography: {
    fontSize: 12,
    body1: {
      ...makeFontStyles(14, '17px', '#0D1633')
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
    dark: string;
  }
}


export default spotUSTheme;