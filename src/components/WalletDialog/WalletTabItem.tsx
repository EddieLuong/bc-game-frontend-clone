import React from 'react';

import { WalletTabItemWrapper } from './styles';
import Typography from '@mui/material/Typography';

interface WalletTabItemProps {
  isActive: boolean;
  handleSelectTab: () => void;
  icon: React.ReactNode;
  label: string;
}
const WalletTabItem = ({
  icon,
  label,
  isActive,
  handleSelectTab,
}: WalletTabItemProps) => {
  return (
    <WalletTabItemWrapper $isActive={isActive} onClick={handleSelectTab}>
      <div className="wallet_item_icon">{icon}</div>
      <Typography className="wallet_item_label">{label}</Typography>
    </WalletTabItemWrapper>
  );
};

export default WalletTabItem;
