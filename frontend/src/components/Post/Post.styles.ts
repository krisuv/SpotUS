import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';
import { makeFontStyles } from '../../utils/styleSnippets';

export const Container = styled(Box)({
  display: 'flex',
  padding: theme.spacing(1, 2),
  background: 'radial-gradient(100% 475.16% at 21.73% 0%, rgba(241, 172, 67, 0.8) 0%, rgba(240, 240, 240, 0.3) 100%)',
  border: '1px solid rgba(232, 166, 39, 0.3)',
  backdropFilter: 'blur(12.5px)',
  borderRadius: theme.spacing(1),
  '& h2': {
    color: 'black'
  }
});

export const UserInfo = styled(Box)({
  '& h2': {
    ...makeFontStyles(16, '15px')
  },
  '& h3': {
    ...makeFontStyles(12, '20px')
  }
});

export const Avatar = styled('img')({
  borderRadius: 8,
  objectFit: 'cover',
  backgroundSize: 'cover',
  width: 29,
  height: 29,
  [theme.breakpoints.up('sm')]: {
    width: 32,
    height: 32
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: 12,
    width: 36,
    height: 36
  },
  [theme.breakpoints.up('lg')]: {
    borderRadius: 16,
    width: 42,
    height: 42
  },
});

