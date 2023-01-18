import styled from '@emotion/styled';
import { spotUSTheme as theme } from '../../../public';
import { Box, Button as MuiButton, TextareaAutosize } from '@mui/material';
import { makeFontStyles } from '../../utils/styleSnippets';
import SendIcon from '@mui/icons-material/Send';

export const Container = styled(Box)({
  backgroundColor: theme.palette.background.grey,
  borderRadius: theme.spacing(1),
  ...makeFontStyles(12, '15px'),
  padding: theme.spacing(1, 1, 1, 2),
  '& h2': {
    color: 'black'
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 1.5, 1.5, 2.5),
  },
  [theme.breakpoints.up('md')]: {
    ...makeFontStyles(14, '17.5px'),

  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(1.5, 1.5, 1.5, 3.5),
    ...makeFontStyles(16, '17.5px'),
  },
});

export const PublishIcon = styled(SendIcon)({
  fill: theme.palette.primary.main,
  width: 28,
  height: 28
});

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
});

export const Button = styled(MuiButton)({
  alignSelf: 'flex-end',
  // maxWidth: 120
});

export const Textarea = styled(TextareaAutosize)({
  resize: 'none',
  border: 'none'
});