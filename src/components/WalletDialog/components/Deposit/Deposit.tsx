import React, { useCallback, useState } from 'react';

import { Button, Typography } from '@mui/material';
import Box from '@mui/system/Box';

import BonusShapeCenter from '../../../../assets/icons/BonusShapeCenter';
import BonusShapeRight from '../../../../assets/icons/BonusShapeRight';
import BonusShapeLeft from '../../../../assets/icons/BonusShapeLeft';
import { qrCode, treasure } from '../../../../assets/images';
import { COIN_LIST, CURRENCIES } from '../../../../constants';
import SelectCoin from '../../../SelectCoin/SelectCoin';
import TabItem from '../../../TabItem';
import CoinItem from '../../CoinItem';
import {
  BonusItem,
  BonusWrapper,
  CurrencyBody,
  DepositWrapper,
  SelectCoinBox,
  TabList,
  ChooseNetWorkWrapper,
} from './styles';
import PaymentList from 'src/components/PaymentList';

export const MOCK_NETWORK_LIST = [
  { name: 'TRON', value: 'tron' },
  { name: 'BEP20', value: 'bep20' },
];

const BonusPercent = ({ bonus }) => {
  return (
    <div className="item-cont">
      <div className="bonus-box">
        <div className="img">
          <img className="img-treasure" src={treasure} alt="" />
        </div>
        <div className="bonus-num">{`+${bonus}%`}</div>
        <div className="bonus-txt">Bonus</div>
      </div>
    </div>
  );
};

const Deposit = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES.CRYPTO);
  const [selectedCoin, setSelectedCoin] = useState(COIN_LIST[0]);
  const [bonus, setBonus] = useState(150);
  const [selectedNetwork, setSelectedNetwork] = useState(MOCK_NETWORK_LIST[0]);

  const isCoinItemActive = useCallback(
    (coin) => {
      return coin.name === selectedCoin.name;
    },
    [selectedCoin],
  );

  const handleSelectCurrencyTab = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const handleChoosePaymentMethod = (paymentMethod) => {};

  return (
    <DepositWrapper>
      <TabList>
        {Object.keys(CURRENCIES).map((key) => {
          const currency = CURRENCIES[key];
          return (
            <TabItem
              key={currency}
              label={currency}
              isActive={selectedCurrency === currency}
              onClick={() => handleSelectCurrencyTab(currency)}
            />
          );
        })}
      </TabList>
      <CurrencyBody>
        {selectedCurrency === CURRENCIES.CRYPTO && (
          <div>
            {COIN_LIST.map(
              (coin, index) =>
                index < 5 && (
                  <CoinItem
                    coin={coin}
                    key={coin.name}
                    isActive={isCoinItemActive(coin)}
                    onClick={() => handleSelectCoin(coin)}
                  />
                ),
            )}
          </div>
        )}
        <SelectCoinBox>
          {selectedCurrency === CURRENCIES.CRYPTO && (
            <div style={{ padding: '5px 20px' }}>
              <Typography fontSize="14px">Deposit Currency</Typography>
              <Typography
                fontSize="small"
                style={{ cursor: 'pointer', fontWeight: 600 }}
              >
                Record
              </Typography>
            </div>
          )}
          <SelectCoin
            options={COIN_LIST}
            value={selectedCoin}
            handleSelect={handleSelectCoin}
            isInputFieldFullWidth={selectedCurrency === CURRENCIES.NFT}
          >
            <Typography fontSize="small">Balance</Typography>
            <Typography color="white" fontWeight={700}>
              0.000000000
            </Typography>
          </SelectCoin>
        </SelectCoinBox>
        {selectedCurrency !== CURRENCIES.NFT && (
          <BonusWrapper>
            <div style={{ padding: '5px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <b>1st</b>
                <Typography
                  ml="5px"
                  fontSize="0.875rem"
                  fontWeight={600}
                  color="white"
                >
                  {`Deposit 0.266+ ${selectedCoin.name} to get:`}
                </Typography>
              </div>
              <Typography
                fontSize="14px"
                style={{ cursor: 'pointer', fontWeight: 600 }}
              >
                More
              </Typography>
            </div>
            <Box className="bonus_list">
              <BonusItem
                isActive={bonus === 120}
                className="item2"
                onClick={() => setBonus(120)}
              >
                <BonusShapeLeft isActive={bonus === 120} />
                <BonusPercent bonus={120} />
              </BonusItem>
              <BonusItem
                isActive={bonus === 150}
                className="item1"
                onClick={() => setBonus(150)}
              >
                <BonusShapeCenter isActive={bonus === 150} />
                <BonusPercent bonus={150} />
              </BonusItem>
              <BonusItem
                isActive={bonus === 270}
                className="item0"
                onClick={() => setBonus(270)}
              >
                <BonusShapeRight isActive={bonus === 270} />
                <BonusPercent bonus={270} />
              </BonusItem>
            </Box>
          </BonusWrapper>
        )}
        <ChooseNetWorkWrapper>
          {selectedCurrency === CURRENCIES.CRYPTO && (
            <>
              <Typography ml="20px" fontSize="14px">
                Choose Network
              </Typography>
              <Box mt="10px">
                {MOCK_NETWORK_LIST.map((network) => (
                  <Button
                    key={network.name}
                    className="network-button"
                    onClick={() => setSelectedNetwork(network)}
                    variant={
                      network === selectedNetwork ? 'active' : 'contained'
                    }
                  >
                    {network.name}
                  </Button>
                ))}
              </Box>
            </>
          )}
          {selectedCurrency !== CURRENCIES.FIAT && (
            <Box className="address">
              <Box className="add-cont">
                <Typography fontSize="small">Deposit Address</Typography>
                <Box className="add-text">
                  <span className="cl-active">0xBB</span>
                  980A38eFC5DB40CdCCB6d6111b8b86aaA4
                  <span className="cl-active">CedB</span>
                </Box>
                <Box className="btn-wrap">
                  <Button variant="contained">Copy</Button>
                </Box>
              </Box>
              <Box className="qr-wrap">
                <Box className="q1vi43ef">
                  <img src={qrCode} alt="qr.png" />
                </Box>
              </Box>
            </Box>
          )}
        </ChooseNetWorkWrapper>
        {selectedCurrency === CURRENCIES.FIAT && (
          <Box className="payment-wrap">
            <Typography fontSize="14px" margin="0 0 5px 20px">
              Choose a Payment Method
            </Typography>
            <PaymentList
              paymentList={[
                {
                  img: 'https://img2.bc.game/fait/5a/8e/d1/165839145369116.png',
                  value: '1,500 ~ 1,000,000 NGN',
                },
              ]}
              onChoosePaymentMethod={handleChoosePaymentMethod}
            />
          </Box>
        )}
      </CurrencyBody>
    </DepositWrapper>
  );
};

export default Deposit;
