import { styled, Typography } from '@mui/material';
import { spotUSTheme as theme } from './assets';

export const AppWrapper = styled('div')({
    background: 'linear-gradient(180deg, #0D1633 0%, #14285A 27.6%, #6081D3 100%)',
    minHeight: '100vh',
    overflow: 'hidden',
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
    //reset default CSS values
    '& p, h1, h2, h3, h4, h5, h6': {
        color: theme.palette.text.white,
        overflowWrap: 'break-word'
    },
    '& input, button, textarea, select': {
    font: 'inherit'
    },
    '& img, picture, video, canvas, svg': {
        display: 'block',
        maxWidth: '100%'
    },
    '& a': {
        color: 'whitesmoke',
        textDecoration: 'none'
    }   

})