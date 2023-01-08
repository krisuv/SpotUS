import styled from '@emotion/styled';
import { spotUSTheme as theme } from '../../../public';

export const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(7),
  },
});

export const Nav = styled('nav')({
  '& :not(:last-child)': {
    marginRight: theme.spacing(2)
  }
});