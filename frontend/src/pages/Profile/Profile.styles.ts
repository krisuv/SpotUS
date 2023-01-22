import { Box } from '@mui/system';
import { styled, TextField as MuiTextField } from '@mui/material';

export const UserData = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(6)
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  maxWidth: 300,
  borderRadius: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.text.light,
      // backgroundColor: theme.palette.common.orange
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.dark,
    },
    // '& .Mui-focused fieldset': {
    //   borderColor: theme.palette.text.light,
    // },
    '& .MuiSvgIcon-root': {
      color: theme.palette.text.light,
      fill: theme.palette.text.light,
    },
    '& .MuiAutocomplete-endAdornment': {
      color: theme.palette.text.light,
      fill: theme.palette.text.light,
    },
  },
  '& input': {
    color: theme.palette.text.light,
  },
  '& label': {
    color: theme.palette.text.light,
  },
  '& input::placeholder': {
    color: theme.palette.text.light,
  },
  '& .MuiAutocomplete-tag': {
    backgroundColor: theme.palette.text.light
  },
  // '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
  //   border: `2px solid ${theme.palette.text.orange} !important`
  // },
}));

export const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.up('md')]: {
    width: '50%'
  }
}));