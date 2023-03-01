import { keyframes, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import isPropValid from '@emotion/is-prop-valid';

export const DepositWrapper = styled(Box)`
  .payment-wrap {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TabList = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const CurrencyBody = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  '& > div': {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const SelectCoinBox = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  '& > div': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
  },
}));

export const BonusWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 20,
  marginBottom: 5,
  '& > div': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    b: {
      backgroundColor: '#ffca00',
      display: 'inline-block',
      height: '1rem',
      width: '1.875rem',
      textAlign: 'center',
      lineHeight: '1rem',
      color: theme.palette.common.black,
      fontSize: '.75rem',
      borderRadius: '0.125rem',
      fontStyle: 'italic',
    },
  },
  '.bonus_list': {
    display: 'flex',
    position: 'relative',
    height: '4.375rem',
    '.MuiSvgIcon-root': {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
  },
}));

const scale = keyframes`
  0% { transform: scale(1); }
  50% {transform: scale(.8);}
  100% { transform: scale(1); }
`;

interface BonusItemProps {
  isActive;
}

export const BonusItem = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<BonusItemProps>(({ isActive }) => ({
  position: 'absolute',
  cursor: 'pointer',
  left: 0,
  top: 0,
  height: '100%',
  width: '34%',
  '&.item0': {
    left: 'auto',
    right: 0,
  },
  '&.item1': {
    left: '50%',
    transform: 'translate(-50%)',
  },
  '.item-cont': {
    left: '17%',
    top: '20%',
    position: 'relative',
    zIndex: 1,
  },
  '.bonus-box': {
    position: 'relative',
    paddingLeft: '3.125rem',
    height: '2.625rem',
    img: {
      position: 'absolute',
      width: '2.625rem',
      height: '2.625rem',
      left: 0,
      top: 0,
      animation: isActive && `${scale} 2s infinite linear`,
    },
    '.bonus-num': {
      fontSize: '1.375rem',
      lineHeight: '1.5rem',
      whiteSpace: 'nowrap',
    },
    '.bonus-num, .bonus-txt': {
      color: '#ffca00',
    },
  },
}));

export const ChooseNetWorkWrapper = styled(Box)(({ theme }) => ({
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
  '.address': {
    width: '100%',
    backgroundColor: '#17181b80',
    borderRadius: '4px',
    minHeight: '12.75rem',
    position: 'relative',
    marginTop: '1.0625rem',
    padding: '.75rem 11.875rem .75rem 1.375rem',
    display: 'flex',
    '.add-cont': {
      width: '13.25rem',
      marginTop: '0.875rem',
    },
    '.cl-active': {
      color: theme.palette.action.active,
    },
    '.add-text': {
      wordWrap: 'break-word',
      margin: '10px 0 30px',
    },
    '.qr-wrap': {
      position: 'absolute',
      right: '0.75rem',
      margin: 0,
      top: '0rem',
      '& > div': {
        width: '11.125rem',
        height: '11.125rem',
        margin: '1rem auto',
        padding: '0.75rem',
        borderRadius: '4px',
        overflow: 'hidden',
        backgroundColor: '#2d3035',
        img: {
          width: '100%',
          borderRadius: '4px',
          imageRendering: 'pixelated',
        },
      },
    },
    '.btn-wrap > button': {
      padding: '0 30px',
      backgroundColor: theme.palette.primary.light,
      boxShadow: 'none',
      color: theme.palette.text.primary,
    },
  },
}));
