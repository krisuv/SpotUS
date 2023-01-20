import { styled, Grid } from '@mui/material';

export const Container = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const Wall = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const StickySidebar = styled(Grid)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  alignSelf: 'flex-start',
  top: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  gap: theme.spacing(3),
  flexDirection: 'column',
}));

