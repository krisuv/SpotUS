import { styled } from '@mui/material';

export const Error = styled('span')(({theme}) => ({
  margin: theme.spacing(1,0),
  color: theme.palette.error.dark,
  fontWeight: 500
}));