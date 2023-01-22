import { styled, TextareaAutosize, Button as MuiButton, Box, Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const GridWrapper = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  minHeight: 70,
  padding: theme.spacing(2),
  resize: 'none',
  border: 'none',
  backgroundColor: theme.palette.background.darkGrey,
  borderRadius: theme.spacing(1),
  fontWeight: '500 !important',
  '&:focus': {
    boxShadow: 'none',
    border: 'none',
    outline: `1px solid ${theme.palette.text.dark}`
  }
}));

export const Button = styled(MuiButton)({
  alignSelf: 'flex-end',
});

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const PublishIcon = styled(SendIcon)(({ theme }) => ({
  fill: theme.palette.primary.main,
  width: 28,
  height: 28
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.light
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.light,
  fontSize: 20,
  [theme.breakpoints.up('sm')]: {
    fontSize: 30
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 35
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 40
  },
}));
