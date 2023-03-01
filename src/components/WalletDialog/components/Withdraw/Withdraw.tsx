import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from 'src/components/InputField';
import SelectCoin from 'src/components/SelectCoin';
import TabItem from 'src/components/TabItem';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { COIN_LIST, CURRENCIES } from '../../../../constants';
import { MOCK_NETWORK_LIST } from '../Deposit/Deposit';
import {
  ActionBox,
  ChooseNetWorkWrapper,
  Form,
  TabList,
  WithdrawAddress,
  WithdrawAmount,
  WithdrawBody,
  WithdrawTag,
  WithdrawWrapper,
} from './styles';
import PaymentList from 'src/components/PaymentList';

const tabList = [
  { label: CURRENCIES.CRYPTO, value: CURRENCIES.CRYPTO },
  { label: CURRENCIES.FIAT, value: CURRENCIES.FIAT },
];

interface IWithdrawForm {
  address: string;
  tag: number;
  amount: string;
}

const QUICK_SELECT_AMOUNT_OPTIONS = ['min', '25', '50', 'max'];

const Withdraw = () => {
  const [selectedTab, setSelectedTab] = useState(tabList[0]);
  const [selectedCoin, setSelectedCoin] = useState(COIN_LIST[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(MOCK_NETWORK_LIST[0]);

  const schema = Yup.object().shape({
    address: Yup.string(),
    tag: Yup.number().required('Tag is required'),
    amount: Yup.number().min(22.5),
  });

  const form = useForm<IWithdrawForm>({
    defaultValues: {
      address: '',
      tag: 1,
      amount: '0.000000000',
    },
    resolver: yupResolver(schema),
  });

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleConfirmWithdraw = (data) => {};

  const quickSelectAmount = (amount) => {
    const ballance = 1000000;

    if (amount === 'min') {
      form.setValue('amount', '22.5');
    } else if (amount === 'max') {
      form.setValue('amount', String(ballance));
    } else {
      form.setValue('amount', String(ballance * (Number(amount) / 100)));
    }
  };

  const handleChoosePaymentMethod = (paymentMethod) => {};

  return (
    <WithdrawWrapper>
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
      <WithdrawBody>
        {selectedTab.value === CURRENCIES.CRYPTO && (
          <Typography className="record-title" fontSize="small">
            Record
          </Typography>
        )}
        <SelectCoin
          options={COIN_LIST}
          value={selectedCoin}
          handleSelect={handleSelectCoin}
        >
          <Typography fontSize="small">Balance</Typography>
          <Typography color="white" fontWeight={700}>
            0.000000000
          </Typography>
        </SelectCoin>
        {selectedTab.value === CURRENCIES.CRYPTO && (
          <>
            <ChooseNetWorkWrapper>
              <Typography className="label">Choose Network</Typography>
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
            </ChooseNetWorkWrapper>
            <Form
              noValidate
              onSubmit={form.handleSubmit(handleConfirmWithdraw)}
            >
              <WithdrawAddress>
                <Typography className="label">Withdraw Address</Typography>
                <InputField
                  form={form}
                  name="address"
                  placeholder="Fill in carefully according to the specific currency"
                  sx={{ marginBottom: '15px' }}
                />
              </WithdrawAddress>
              <WithdrawTag>
                <Typography className="label">
                  Tag
                  <span>Required</span>
                </Typography>
                <InputField
                  onBlur={() => {
                    const tag = form.getValues('tag');
                    if (!tag) {
                      form.resetField('tag');
                    }
                  }}
                  form={form}
                  name="tag"
                  sx={{ marginBottom: '15px' }}
                  placeholder="Please enter an integer greater than 0"
                />
              </WithdrawTag>
              <WithdrawAmount>
                <div className="label-cont">
                  <Typography className="label">Withdraw amount</Typography>
                  <Typography fontSize="12px">Min: 22.25</Typography>
                </div>
                <InputField
                  onBlur={() => {
                    const amount = form.getValues('amount');
                    if (!amount) {
                      form.resetField('amount');
                    }
                  }}
                  form={form}
                  name="amount"
                  sx={{ marginBottom: '15px' }}
                />
                <Typography fontSize="16px" textAlign="end" mr="20px">
                  ≈ ₫0.00
                </Typography>
                <div className="btn-wrap">
                  {QUICK_SELECT_AMOUNT_OPTIONS.map((amount) => (
                    <div onClick={() => quickSelectAmount(amount)}>
                      {amount}
                    </div>
                  ))}
                </div>
              </WithdrawAmount>
            </Form>
          </>
        )}
      </WithdrawBody>
      {selectedTab.value === CURRENCIES.CRYPTO && (
        <ActionBox mt="1rem">
          <div className="action-box">
            <Typography fontSize="14px">
              Fee&nbsp;<span className="fee-num">0.25 XRP</span>
            </Typography>
            <Button variant="conic2" className="confirm-button">
              Confirm
            </Button>
          </div>
          <Typography className="notice-text">
            <Typography marginBottom="5px">
              <span>Notice: </span>We do not support inactive addresses
            </Typography>
            For security purposes, large or suspicious withdrawal may take 1-6
            hours for audit process. We appreciate your patience!
          </Typography>
        </ActionBox>
      )}
      {selectedTab.value === CURRENCIES.FIAT && (
        <Box margin="20px 0">
          <Typography fontSize="14px" margin="0 0 5px 20px">
            Withdraw to
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
    </WithdrawWrapper>
  );
};

export default Withdraw;
