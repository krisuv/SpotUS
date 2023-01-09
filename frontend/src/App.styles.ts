import { styled } from '@mui/material';
import { spotUSTheme as theme } from '../public';

export const AppWrapper = styled('div')({
  // background: 'linear-gradient(180deg, #0D1633 0%, #14285A 27.6%, #6081D3 100%)',
  // minHeight: '100vh',
  // overflow: 'hidden',
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
  //reset default CSS values
  '& p, h1, h2, h3, h4, h5, h6': {
    color: theme.palette.text.light,
    overflowWrap: 'break-word'
  },
  '& h1, h2, h3, h4, h5, h6': {
    color: theme.palette.text.light,
  },
  '& p': {
    color: theme.palette.text.dark,
  },
  '& input, button, textarea, select': {
    font: 'inherit'
  },
  '& img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  // '&::-webkit-scrollbar': {
  //   width: '.8vw'
  // },
  // '&::-webkit-scrollbar-track': {
  //   background: 'pink',
  //   borderRadius: 10,
  //   marginBlock: 15
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   borderRadius: 10,
  //   padding: 5,
  //   background: 'gold'
  // }

});
