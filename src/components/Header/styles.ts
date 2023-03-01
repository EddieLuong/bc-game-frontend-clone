import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '64px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 40px 0 35px',
}));

export const WalletButton = styled(Button)`
  font-weight: 800;
  padding: 0 25px;
  margin-right: 20px;
`;

export const UserInfoBox = styled(Box)`
  display: flex;
  cursor: pointer;
  .username {
    margin: 0;
    width: 80px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16px;
  }
`;
