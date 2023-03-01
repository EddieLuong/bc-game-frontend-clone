import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)(({ error, theme }) => ({
  color: theme.palette.common.white,
  '& .MuiOutlinedInput-root': {
    '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
      border: !error && `3px solid ${theme.palette.primary.light}`,
    },
    color: error && theme.palette.error.main,
    paddingRight: 0,
  },
  'input::placeholder': {
    color: theme.palette.text.primary,
    opacity: 1,
    fontSize: '13px',
  },
  '.MuiInputAdornment-positionEnd': {
    position: 'absolute',
    right: '14px',
  },
  '.MuiFormHelperText-root.Mui-error': {
    marginLeft: 0,
    fontSize: 12,
  },
  '.MuiSvgIcon-root': {
    color: theme.palette.text.disabled,
  },
  '&& .MuiInput-root:before, && .MuiInput-root:hover::before, && .Mui-focused.MuiInput-root:after':
    {
      borderBottom: `2px solid ${theme.palette.primary.light}`,
    },
}));
