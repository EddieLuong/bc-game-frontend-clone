import {
  BACKGROUND_LIGHT_COLOR,
  BACKGROUND_MAIN_COLOR,
} from 'src/themes/colors';

import isPropValid from '@emotion/is-prop-valid';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const WalletTabList = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  backgroundColor: BACKGROUND_MAIN_COLOR,
  padding: '12px 17px',
}));

export const WalletTabItemWrapper = styled('div', {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<{ $isActive: boolean }>(({ theme, $isActive }) => ({
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: '5px',
  borderRadius: '4px',
  backgroundColor: $isActive && theme.palette.primary.light,
  color: $isActive && theme.palette.common.white,
  border: !$isActive && `solid 2px ${theme.palette.grey[800]}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '.wallet_item_icon': {
    width: 20,
    height: 20,
    marginRight: '10px',
    '& svg': {
      marginTop: '-3px',
    },
  },
  '.wallet_item_label': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 800,
    lineHeight: '20px',
    width: $isActive ? '80px' : '0px',
    transition: 'all ease 0.4s',
  },
}));

export const WalletBody = styled(Box)(({}) => ({
  padding: '20px 40px',
  backgroundColor: BACKGROUND_LIGHT_COLOR,
  width: '100%',
  height: '564px',
  overflowY: 'auto',
  zIndex: -1,
}));

export const WalletFooter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  backgroundColor: BACKGROUND_LIGHT_COLOR,
  padding: '20px 40px',
  '.footer-box': {
    lineHeight: '1rem',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 18px',
    border: `1px solid ${theme.palette.grey[800]}`,
    '& p': {
      display: 'inline',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      textAlign: 'center',
      cursor: 'pointer',
    },
  },
}));

interface CoinItemProps extends BoxProps {
  $isActive?: boolean;
}

export const CoinItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<CoinItemProps>(({ theme, $isActive = false }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
  padding: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  fontWeight: $isActive ? 600 : 400,
  backgroundColor: $isActive ? '#363940' : theme.palette.primary.light,
}));
