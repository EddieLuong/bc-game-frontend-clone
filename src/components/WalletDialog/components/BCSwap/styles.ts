import { BACKGROUND_MAIN_COLOR } from 'src/themes/colors';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const BCSwapWrapper = styled(Box)(({ theme }) => ({
  'div.label': {
    padding: '5px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .progress_circle': {
    color: theme.palette.action.active,
    marginLeft: '5px',
  },
}));

export const SwapBody = styled(Box)(({ theme }) => ({
  position: 'relative',
  '.swap-box': {
    cursor: 'pointer',
    textAlign: 'center',
    position: 'absolute',
    width: '2.25rem',
    height: '2.25rem',
    left: '50%',
    top: '50%',
    margin: '-1.125rem 0 0 -1.125rem',
    zIndex: '1',
    border: `solid 3px ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.max-box': {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '60%',
    width: '3.75rem',
    height: '1.875rem',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
  },
  '.tips-box': {
    span: {
      color: theme.palette.common.white,
    },
    margin: '1.25rem 0 2.5625rem',
    padding: '0.5rem 1.25rem',
    borderRadius: '4px',
    backgroundColor: BACKGROUND_MAIN_COLOR,
  },
  '.swap-now': {
    margin: '2.5rem auto 0',
    height: '3.5rem',
    width: '20.3125rem',
    button: {
      height: '100%',
      width: '100%',
    },
  },
}));
