import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const VaultProWrapper = styled(Box)(({}) => ({}));

export const TabList = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const VaultProBody = styled(Box)(({ theme }) => ({
  marginTop: '2.5rem',
  '.top-help': {
    margin: '0 1rem 0.375rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: '.75rem',
  },
  '.title-rate': {
    fontWeight: 600,
    fontSize: 14,
    color: theme.palette.common.white,
    span: {
      fontSize: 16,
    },
  },
  '.top-help span, .top-help svg': {
    color: theme.palette.action.active,
  },
  svg: {
    width: 17,
    height: 17,
  },
  '.security-rule': {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    svg: {
      marginRight: '5px',
    },
  },
  '.transfer-btn': {
    margin: '2.5rem auto 0',
    height: '3.5rem',
    width: '20.3125rem',
    button: {
      height: '100%',
      width: '100%',
    },
  },
}));

export const SelectCoinBox = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  '.input-label': {
    p: {
      textAlign: 'end',
      marginRight: '20px',
    },
    '.amount': {
      color: theme.palette.common.white,
    },
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
}));
