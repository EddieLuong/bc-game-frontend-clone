import { BACKGROUND_MAIN_COLOR } from 'src/themes/colors';

import isPropValid from '@emotion/is-prop-valid';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface DialogHeaderProps extends BoxProps {
  $hasCloseBtn: boolean;
}

export const DialogHeader = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<DialogHeaderProps>(({ $hasCloseBtn, theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '22px 0 0 18px',
  position: 'relative',
  height: '3.75rem',
  paddingRight: $hasCloseBtn && '3.75rem',
  backgroundColor: BACKGROUND_MAIN_COLOR,
  '.dialog-title': {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.common.white,
  },
}));

export const CloseBox = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DialogBody = styled(Box)``;

export const DialogWrapper = styled(Box)(({ theme }) => ({
  height: '785px',
  width: '560px',
  backgroundColor: theme.palette.primary.light,
}));
