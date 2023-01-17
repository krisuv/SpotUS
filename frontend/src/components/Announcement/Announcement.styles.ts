import styled from '@emotion/styled';
import { Typography, Box, Button } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';
import gradientColors from '../../utils/gradientColors';
import { makeBorder } from '../../utils/styleSnippets';

export const Title = styled(Typography)({
  backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, blue)`,
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent !important',
  maxWidth: '230px'
  // textFillColor: 'transparent',
  // '-webkit-text-fill-color': 'transparent',
});

export const Container = styled(Box)({
  background: gradientColors['other'],
  border: makeBorder(theme.palette.text.lightBorder),
  backdropFilter: 'blur(12.5px)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(7, 6),
  maxWidth: 500
});

export const Submit = styled(Button)({
  marginTop: theme.spacing(10),
});