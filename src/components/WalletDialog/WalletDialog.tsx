import React, { useState } from 'react';

import VaultProIcon from '@mui/icons-material/Brightness5Outlined';
import WithdrawIcon from '@mui/icons-material/CreditCardRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import DepositIcon from '@mui/icons-material/SavingsOutlined';
import BCSwapIcon from '@mui/icons-material/SwapCallsRounded';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { WALLET_TAB_KEY } from '../../constants';
import Dialog from '../Dialog';
import BCSwap from './components/BCSwap';
import Deposit from './components/Deposit';
import VaultPro from './components/VaultPro';
import Withdraw from './components/Withdraw';
import { WalletBody, WalletTabList, WalletFooter } from './styles';
import WalletTabItem from './WalletTabItem';
import { ACTIVE_COLOR } from 'src/themes/colors';

const walletTabs = [
  {
    key: WALLET_TAB_KEY.DEPOSIT,
    label: 'Deposit',
    icon: <DepositIcon />,
  },
  {
    key: WALLET_TAB_KEY.BSCSWAP,
    label: 'BCSwap',
    icon: <BCSwapIcon />,
  },
  {
    key: WALLET_TAB_KEY.VAULT_PRO,
    label: 'Vault Pro',
    icon: <VaultProIcon />,
  },
  {
    key: WALLET_TAB_KEY.WITHDRAW,
    label: 'Withdraw',
    icon: <WithdrawIcon />,
  },
];

interface WalletDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const WalletDialog = ({ isOpen, handleClose }: WalletDialogProps) => {
  const [selectedWalletTab, setSelectedWalletTab] = useState(walletTabs[0]);

  const handleSelectTab = (selectedTab) => {
    setSelectedWalletTab(selectedTab);
  };

  return (
    <Dialog
      title="Wallet"
      isOpen={isOpen}
      handleClose={handleClose}
      dialogHeaderChild={
        <Button
          startIcon={
            <CurrencyExchangeRoundedIcon style={{ fontSize: '14px' }} />
          }
          sx={{ color: 'text.primary', top: '-50%' }}
        >
          Transactions
        </Button>
      }
      hasCloseBtn
    >
      <Box>
        <WalletTabList>
          {walletTabs.map((walletTab) => (
            <WalletTabItem
              key={walletTab.key}
              isActive={walletTab.key === selectedWalletTab.key}
              handleSelectTab={() => handleSelectTab(walletTab)}
              icon={walletTab.icon}
              label={walletTab.label}
            />
          ))}
        </WalletTabList>
      </Box>
      <WalletBody>
        {selectedWalletTab.key === WALLET_TAB_KEY.DEPOSIT && <Deposit />}
        {selectedWalletTab.key === WALLET_TAB_KEY.BSCSWAP && <BCSwap />}
        {selectedWalletTab.key === WALLET_TAB_KEY.VAULT_PRO && <VaultPro />}
        {selectedWalletTab.key === WALLET_TAB_KEY.WITHDRAW && <Withdraw />}
      </WalletBody>
      <WalletFooter>
        <div className="footer-box">
          <Typography>To secure your assets, please</Typography>
          <Typography
            sx={{ color: ACTIVE_COLOR, fontWeight: 600, marginLeft: '5px' }}
          >
            Enable 2FA
          </Typography>
        </div>
      </WalletFooter>
    </Dialog>
  );
};

export default WalletDialog;
