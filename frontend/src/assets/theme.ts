import { blue, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const spotUSTheme = createTheme({
  palette: {
    primary: purple,
    text: {
      white: '#F0F0F0'
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
  typography: {
    
    // h1: {
    //   fontWeight: 700
    // }
  }
});

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    white: string;
  }
}


export default spotUSTheme;