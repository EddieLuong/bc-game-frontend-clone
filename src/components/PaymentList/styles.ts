import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const PaymentListWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  '.payment-item': {
    width: '100%',
    height: '4.5rem',
    border: '4px solid transparent',
    borderRadius: '4px',
    backgroundColor: '#2b2d3380',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '0.4375rem',
  },
  img: {
    height: '2.5rem',
  },
}));
