import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const LayoutWrapper = styled(Box)`
  display: flex;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
`;

export const BodyWrapper = styled(Box)`
  flex: 1;
  min-width: 150px;
`;

export const ContainerWrapper = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
  padding: '37px 35px',
  transition: 'opacity 0.5s ease',
  background: `linear-gradient(180deg,#191B1E 0%, ${theme.palette.primary.light} 100%)`,
}));
