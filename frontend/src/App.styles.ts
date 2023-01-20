import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
  padding: theme.spacing(2, 3),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 10)
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 20)
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(6, 20)
  },
  '& p, h1, h2, h3, h4, h5, h6': {
    color: theme.palette.text.light,
    fontFamily: 'Montserrat, sans-serif',
    overflowWrap: 'break-word'
  },
  '& h1, h2, h3, h4, h5, h6': {
    color: theme.palette.text.light,
    fontWeight: 700,
  },
  '& p': {
    color: theme.palette.text.dark,
    fontWeight: 500
  },
  '& input, button, textarea, select': {
    font: 'inherit'
  },
  '& img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
}));

export const AppWrapper = styled(Box)(({ theme }) => ({
  // isolation: 'isolate',
  fontFamily: '"Montserrat", sans-serif',
  background: 'linear-gradient(180deg, #0D1633 0%, #14285A 27.6%, #6081D3 100%)',
}));
