import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { spotUSTheme as theme } from '../../../public';
import gradientColors from '../../utils/gradients';
import { makeBorder } from '../../utils/styleSnippets';

export const Title = styled(Typography)({
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  background: 'radial-gradient(79.01% 3503.59% at 11.6% 17.05%, rgba(241, 172, 67, 0.9) 0%, rgba(24, 59, 183, 0.8) 100%)'
});

export const Container = styled(Box)({
  background: gradientColors['other'],
  border: makeBorder(theme.palette.text.lightBorder),
  backdropFilter: 'blur(12.5px)',
  borderRadius: theme.spacing(1),
});