import styled from '@emotion/styled';
import {  Grid } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';

export const Container = styled(Grid)<{isMain?: boolean}>(({isMain}) =>({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  overflowY: isMain? 'scroll' : 'initial',
  maxHeight: isMain? '100vh' : 'initial'
  // [theme.breakpoints.up('sm')]: {
  //   gap: theme.spacing(5),
  // },
  // [theme.breakpoints.up('md')]: {
  //   gap: theme.spacing(5),
  // },
}));

