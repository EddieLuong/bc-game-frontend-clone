import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import isPropValid from '@emotion/is-prop-valid';

interface TabItemWrapperProps extends BoxProps {
  $isActive: boolean;
}

export const TabItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(String(prop)),
})<TabItemWrapperProps>(({ $isActive, theme }) => ({
  fontSize: $isActive ? '1rem' : '0.875rem',
  color: $isActive ? theme.palette.common.white : theme.palette.text.primary,
  width: '8rem',
  padding: '8px',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  backgroundColor: $isActive ? 'rgba(92, 104, 115, 0.2)' : '#25272c',
  '& p': {
    fontWeight: $isActive ? 700 : 400,
    transition: 'fontWeight ease-in-out 0.3s',
  },
  '&:hover': {
    color: theme.palette.common.white,
  },
  transition: 'all ease 0.3s',
}));
