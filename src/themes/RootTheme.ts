import { createTheme } from '@mui/material';

import {
  ACTIVE_BACKGROUND_COLOR,
  ACTIVE_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_MAIN_COLOR,
  PURPLE_COLOR,
  PURPLE_LIGHT_COLOR,
  TEXT_PRIMARY_COLOR,
  WHITE_COLOR,
} from './colors';
import GlobalStyles from './GlobalStyles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      light: PRIMARY_LIGHT_COLOR,
    },
    text: {
      primary: TEXT_PRIMARY_COLOR,
    },
    action: {
      active: ACTIVE_COLOR,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: GlobalStyles,
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 'inherit',
          backgroundColor: PRIMARY_LIGHT_COLOR,
          color: TEXT_PRIMARY_COLOR,
          '&.MuiOutlinedInput-root': {
            flexWrap: 'inherit',
            '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
              border: 'none',
            },
          },
          '& svg': {
            color: TEXT_PRIMARY_COLOR,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            backgroundColor: '#17181b',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          height: 48,
          textTransform: 'capitalize',
        },
      },
      variants: [
        {
          props: { variant: 'conic1' },
          style: {
            color: `${WHITE_COLOR}`,
            backgroundImage: `conic-gradient(from 1turn,${PURPLE_LIGHT_COLOR}, ${PURPLE_COLOR})`,
          },
        },
        {
          props: { variant: 'conic2' },
          style: {
            color: `${WHITE_COLOR}`,
            fontWeight: 600,
            fontSize: 16,
            backgroundImage: `conic-gradient(from 1turn,#6ACF15,#209B44)`,
          },
        },
        {
          props: { variant: 'active' },
          style: {
            color: `${WHITE_COLOR}`,
            border: `solid 1px ${ACTIVE_COLOR}`,
            fontWeight: 800,
            backgroundColor: ACTIVE_BACKGROUND_COLOR,
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: TEXT_PRIMARY_COLOR,
          transition: 'all ease-in-out 0.2s',
          '&:hover.close-btn': {
            transform: 'rotate(-90deg)',
            color: WHITE_COLOR,
          },
        },
      },
    },
  },
});

export default muiTheme;
