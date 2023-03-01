import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectCoinWrapper = styled(Box)(({ theme }) => ({
  padding: '5px',
  position: 'relative',
  backgroundColor: '#17181b',
  display: 'flex',
  justifyContent: 'space-between',
  border: `3px solid ${theme.palette.primary.light}`,
  '.MuiSelect-select': {
    padding: '5px',
  },
  '.balance_box': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginRight: '5px',
  },
}));
