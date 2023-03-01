import { Typography } from '@mui/material';
import React from 'react';

import { TabItemWrapper } from './styles';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem = ({ isActive, label, onClick }: TabItemProps) => {
  return (
    <TabItemWrapper $isActive={isActive} onClick={onClick}>
      <Typography>{label}</Typography>
    </TabItemWrapper>
  );
};

export default TabItem;
