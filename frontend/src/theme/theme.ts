import { amber, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { makeFontStyles } from '../utils/styleSnippets';

const spotUSTheme = createTheme({
  palette: {
    primary: {
      main: '#A1B0BF',
      contrastText: '#293f54',
      dark: '#7C8D9E',
      light: '#C5D7E8'
    },
    secondary: amber,
    info: {
      main: '#7C8D9E',
      light: '#8797a8',
      dark: '#617080',
      contrastText: '#2a435c'

    },
    text: {
      lightBorder: 'rgba(240, 240, 240, .3)',
      light: '#F0F0F0',
      dark: '#0D1633'
    },
    background: {
      dark: '#0D1633',
      light: '#6081D3',
      grey: '#A1B0BF',
      darkGrey: '#7C8D9E',
    }
  },
  typography: {
    fontSize: 12,
    body1: {
      ...makeFontStyles(14, '17px', '#0D1633'),
      fontWeight: '500 !important'
    },
    body2: {
      fontWeight: '700 !important',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '600 !important',
          textTransform: 'lowercase',
          borderRadius: 24,
        }
      }
    },
    MuiAutocomplete: {
      // styleOverrides: {
      //   inputRoot: {
      //     // padding: 100
      //   },
      //   root: {
      //     background: 'olive'
      //   },
      //   groupLabel: {
      //     background: 'cyan'
      //   },
      //   popper: {
      //     background: 'orange'
      //   },
      //   input: {
      //     background: 'red'
      //   },
      //   popupIndicator: {
      //     background: 'green'
      //   }
      // }
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
    darkGrey: string;
  }
}


export default spotUSTheme;