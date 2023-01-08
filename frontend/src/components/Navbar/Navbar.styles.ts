import styled from '@emotion/styled';
import { spotUSTheme as theme } from '../../../public';

export const Header = styled('header')<{ isBreakpointMet: boolean }>(({ isBreakpointMet }) => ({
  position: 'sticky',
  backgroundColor: isBreakpointMet? theme.palette.background.dark : 'transparent',
  // backdropFilter: isBreakpointMet? 'blur(20px) brightness(80%)' : 'none',
  transition: '.3s ease-in-out',
  top: 0,
  zIndex: theme.zIndex.mobileStepper,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 20, 1),
  [theme.breakpoints.up('sm')]: {
    // marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    // marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('lg')]: {
    // marginBottom: theme.spacing(7),
  },
}));

export const Nav = styled('nav')({
  '& :not(:last-child)': {
    marginRight: theme.spacing(4)
  },
  '& a': {
    color: 'whitesmoke',
    textDecoration: 'none'
  },
});