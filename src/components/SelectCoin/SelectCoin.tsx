import React from 'react';
import { PRIMARY_MAIN_COLOR, TEXT_PRIMARY_COLOR } from 'src/themes/colors';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Select from '@mui/material/Select';

import CoinItem from '../WalletDialog/CoinItem';
import { SelectCoinWrapper } from './styles';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

interface SelectCoinProps {
  value: { name: string; image: string };
  handleSelect: (coin) => void;
  options: { name: string; image: string }[];
  children: React.ReactNode;
  isInputFieldFullWidth?: boolean;
}

const SelectCoin = ({
  value,
  options,
  children,
  handleSelect,
  isInputFieldFullWidth = false,
}: SelectCoinProps) => {
  return (
    <SelectCoinWrapper
      className="selected_coin_box"
      sx={{
        '&& .MuiInputBase-root': {
          width: isInputFieldFullWidth ? '100%' : '9rem',
        },
      }}
    >
      <Select
        value={value}
        defaultValue={options[0]}
        IconComponent={({ ...props }) => (
          <KeyboardArrowDownRoundedIcon
            {...props}
            sx={{ color: TEXT_PRIMARY_COLOR }}
          />
        )}
        MenuProps={{
          sx: {
            '& ul': {
              backgroundColor: PRIMARY_MAIN_COLOR,
            },
          },
        }}
        renderValue={(coin) => (
          <CoinItem
            coin={coin}
            key={coin.name}
            onClick={() => handleSelect(coin)}
          />
        )}
        onChange={({ target }) => {
          if (typeof target.value === 'string') {
            handleSelect(JSON.parse(target.value));
          }
        }}
      >
        {options.map((coin) => (
          <MenuItem key={coin.name} value={JSON.stringify(coin)}>
            <CoinItem
              coin={coin}
              key={coin.name}
              onClick={() => handleSelect(coin)}
            />
          </MenuItem>
        ))}
      </Select>
      {!isInputFieldFullWidth && <Box className="balance_box">{children}</Box>}
    </SelectCoinWrapper>
  );
};

export default SelectCoin;
