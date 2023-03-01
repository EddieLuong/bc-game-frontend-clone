import isPropValid from '@emotion/is-prop-valid';
import Box, { BoxProps } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

interface SideBarWrapperProps extends BoxProps {
  $isCollapse: boolean;
}

export const SideBarWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<SideBarWrapperProps>(({ theme, $isCollapse }) => ({
  backgroundColor: theme.palette.primary.main,
  width: $isCollapse ? '64px' : '260px',
  transition: 'width 0.3s ease',
  overflowX: 'hidden',
}));

export const LogoBox = styled(Box)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  padding: '0 10px',
  'img.logo_bc_game': {
    height: '2rem',
  },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  height: '44px',
  width: '44px',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light,
  },
}));
