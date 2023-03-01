import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const WithdrawWrapper = styled(Box)(({}) => ({
  '.label': {
    marginLeft: 20,
    fontSize: '14px',
  },
}));

export const TabList = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const WithdrawBody = styled(Box)(({}) => ({
  marginTop: 10,
  '.record-title': {
    cursor: 'pointer',
    fontWeight: 600,
    textAlign: 'end',
    marginRight: 20,
    marginBottom: 5,
  },
}));

export const ChooseNetWorkWrapper = styled(Box)(({ theme }) => ({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
  '&&': {
    alignItems: 'flex-start',
  },
  '.network-button': {
    marginRight: 10,
    padding: '0 30px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'none',
  },
}));

export const WithdrawAddress = styled(Box)(({}) => ({
  marginTop: 20,
}));

export const WithdrawTag = styled(Box)(({ theme }) => ({
  'p span': {
    color: theme.palette.error.main,
    fontWeight: 600,
    marginLeft: 5,
  },
}));

export const WithdrawAmount = styled(Box)(({ theme }) => ({
  position: 'relative',
  '.label-cont': {
    marginRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  '.btn-wrap': {
    display: 'inline-flex',
    position: 'absolute',
    top: '40%',
    right: '5%',
    transform: 'translateY(-18%)',
    '& > div': {
      margin: '1px',
      borderRadius: '2px',
      backgroundColor: theme.palette.primary.light,
      height: '2.25rem',
      width: '2.6875rem',
      fontSize: '.75rem',
      textAlign: 'center',
      lineHeight: '2.25rem',
      cursor: 'pointer',
    },
  },
}));

export const Form = styled('form')``;

export const ActionBox = styled(Box)(({ theme }) => ({
  '.action-box': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.fee-num': {
    fontSize: '1rem',
    color: theme.palette.action.active,
    fontWeight: 'bold',
  },
  '.confirm-button': {
    margin: '1rem 0 2rem',
    height: '3.5rem',
    width: '20.3125rem',
    button: {
      height: '100%',
      width: '100%',
    },
  },
  '.notice-text, p': {
    fontSize: '0.875rem',
    color: '#99a4b0',
    span: {
      fontWeight: 800,
      color: theme.palette.text.primary,
    },
  },
}));
