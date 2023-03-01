import React, { useState } from 'react';
import TabItem from 'src/components/TabItem';

import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

import {
  TabList,
  VaultProBody,
  VaultProWrapper,
  SelectCoinBox,
} from './styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SelectCoin from 'src/components/SelectCoin';
import { COIN_LIST } from 'src/constants';
import Button from '@mui/material/Button';

const tabList = [
  { label: 'Transfer In', value: 'transfer_in' },
  { label: 'Transfer Out', value: 'transfer_out' },
];

const VaultPro = () => {
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
  const [selectedCoin, setSelectedCoin] = useState(COIN_LIST[0]);

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <VaultProWrapper>
      <TabList>
        {tabList.map((tab) => (
          <TabItem
            key={tab.value}
            label={tab.label}
            isActive={selectedTab.value === tab.value}
            onClick={() => handleSelectTab(tab)}
          />
        ))}
      </TabList>
      <VaultProBody>
        <div className="top-help">
          <div className="title-rate">
            Annual Percentage Rate <span>5%</span>
          </div>
          <Typography className="security-rule" fontSize="small">
            <HelpOutlineRoundedIcon />
            Security Rules
          </Typography>
        </div>
        <SelectCoinBox className="ui-input s16h1zvs">
          <Box className="input-label" mb="10px">
            <Typography fontSize="14px">
              Wallet Balance:<span className="amount"> 0</span>
            </Typography>
          </Box>
          <SelectCoin
            options={COIN_LIST}
            value={selectedCoin}
            handleSelect={handleSelectCoin}
          >
            <Typography color="white" fontWeight={700}>
              0
            </Typography>
            <div className="max-box">
              <Typography>Max</Typography>
            </div>
          </SelectCoin>
        </SelectCoinBox>
        <div className="transfer-btn">
          <Button variant="conic2" disabled>
            Transfer to Vault Pro
          </Button>
        </div>
      </VaultProBody>
    </VaultProWrapper>
  );
};

export default VaultPro;
