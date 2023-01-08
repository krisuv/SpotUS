import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';
import { makeFontStyles, makeBorder } from '../../utils/styleSnippets';
import { TCategoryColors, TTag } from './Post.types';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import gradientColors from '../../utils/gradients';

export const Container = styled(Box)<{ category: TTag }>(({ category }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  background: gradientColors[category],
  border: makeBorder(theme.palette.text.lightBorder),
  backdropFilter: 'blur(12.5px)',
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
}));

export const WrapperLeft = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
});
export const WrapperRight = styled(Box)({
  textAlign: 'center',
  fontWeight: 700,
  gap: theme.spacing(1),
  ...makeFontStyles(16, '17.5px'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  // gap: theme.spacing(1)
});

export const Votes = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const UserInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(.5),
  '& h2': {
    ...makeFontStyles(16, '15px')
  },
  '& h3': {
    ...makeFontStyles(12, '20px')
  }
});

export const CommentIcon = styled(ChatBubbleIcon)({
  fill: theme.palette.text.dark,
  width: 22,
  height: 22
});

export const ArrowUp = styled(UpIcon)({
  fill: theme.palette.text.dark,
  width: 40,
  height: 30
});

export const ArrowDown = styled(DownIcon)({
  fill: theme.palette.text.dark,
  width: 40,
  height: 30,
});

export const Comments = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5)
});

