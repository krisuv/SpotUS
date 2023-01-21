import { Grid, styled } from '@mui/material';
import { Box } from '@mui/material';
import { makeFontStyles, makeBorder } from '../../utils/styleSnippets';
import { TTag } from './Post.types';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import gradientColors from '../../utils/gradientColors';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const PostContainer = styled(Grid)<{ category: TTag }>(({ category, theme }) => ({
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
    borderRadius: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(1.5, 1.5, 1.5, 3.5),
    ...makeFontStyles(16, '17.5px'),
  },
}));

export const CommentsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(),
  width: 'min(100%, 600px)',
}));

export const WrapperLeft = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const WrapperRight = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  gap: theme.spacing(1),
  ...makeFontStyles(16, '17.5px'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
}));

export const Votes = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(.5),
  '& h2': {
    ...makeFontStyles(16, '15px')
  },
  '& h3': {
    ...makeFontStyles(12, '20px')
  }
}));

export const CommentIcon = styled(ChatBubbleIcon)(({ theme }) => ({
  fill: theme.palette.text.dark,
  width: 22,
  height: 22
}));

export const ArrowUp = styled(UpIcon)(({ theme }) => ({
  // fill: theme.palette.text.dark,
  width: 35,
  height: 35,
}));

export const ArrowDown = styled(DownIcon)(({ theme }) => ({
  // fill: theme.palette.text.dark,
  width: 35,
  height: 35,
}));

export const Comments = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

