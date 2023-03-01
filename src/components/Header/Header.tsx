import React, { useState } from 'react';

import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { userAvatarImage } from '../../assets/images';
import { HeaderWrapper, UserInfoBox, WalletButton } from './styles';

import WalletDialog from '../WalletDialog';

const Header = () => {
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const [isUserProfileDialogOpen, setIsUserProfileDialogOpen] = useState(false);

  const handleCloseWalletDialog = () => {
    setIsWalletDialogOpen(false);
  };

  const handleCloaseUserProfileDialog = () => {
    setIsUserProfileDialogOpen(false);
  };

  return (
    <HeaderWrapper>
      <WalletButton
        variant="conic1"
        startIcon={<AccountBalanceWalletRoundedIcon />}
        onClick={() => {
          setIsWalletDialogOpen(true);
        }}
      >
        Wallet
      </WalletButton>

      <UserInfoBox>
        <Avatar alt="user image" src={userAvatarImage} />
        <Box style={{ marginLeft: 10 }}>
          <Typography color="white" className="username">
            Lzglsxgxjyb
          </Typography>
          <Box display="inline-flex" fontSize="small">
            VIP:
            <Typography fontSize="small" color="white">
              &nbsp;0
            </Typography>
          </Box>
        </Box>
      </UserInfoBox>
      <WalletDialog
        isOpen={isWalletDialogOpen}
        handleClose={handleCloseWalletDialog}
      />
    </HeaderWrapper>
  );
};

export default Header;
