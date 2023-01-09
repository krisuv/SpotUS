import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';

export const Container = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

export const Wall = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
});

export const StickySidebar = styled(Grid)({
  display: 'flex',
  position: 'sticky',
  alignSelf: 'flex-start',
  top: 0,
  overflowY: 'auto',
  gap: theme.spacing(3),
  flexDirection: 'column',
});

