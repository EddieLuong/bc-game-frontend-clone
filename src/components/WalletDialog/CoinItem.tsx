import Typography from '@mui/material/Typography';
import React from 'react';

import { CoinItemWrapper } from './styles';

interface CoinItemProps {
  coin: {
    name: string;
    image: string;
  };
  isActive?: boolean;
  onClick: () => void;
}

const CoinItem = ({ coin, isActive = false, onClick }: CoinItemProps) => {
  return (
    <CoinItemWrapper
      key={coin.name}
      $isActive={isActive}
      onClick={() => onClick()}
    >
      <img
        style={{ width: '24px', height: '24px', marginRight: '5px' }}
        className="coin_img"
        src={coin.image}
        alt={coin.name}
      />
      <Typography>{coin.name}</Typography>
    </CoinItemWrapper>
  );
};

export default CoinItem;
