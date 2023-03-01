import React from 'react';
import SelectCoin from 'src/components/SelectCoin';
import { COIN_LIST } from 'src/constants';

import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { BCSwapWrapper, SwapBody } from './styles';
import { Button } from '@mui/material';

const BCSwap = () => {
  const [bcSwapPair, setBcSwapPair] = React.useState({
    swapFrom: COIN_LIST[0],
    swapTo: COIN_LIST[1],
  });

  const handleChangeSwapFrom = (coin) => {
    setBcSwapPair((prev) => ({
      ...prev,
      swapFrom: coin,
    }));
  };

  const handleChangeSwapTo = (coin) => {
    setBcSwapPair((prev) => ({
      ...prev,
      swapTo: coin,
    }));
  };

  const swapFromList = React.useMemo(() => {
    return COIN_LIST.filter((coin) => coin.name !== bcSwapPair.swapTo.name);
  }, [bcSwapPair.swapTo]);

  const swapToList = React.useMemo(() => {
    return COIN_LIST.filter((coin) => coin.name !== bcSwapPair.swapFrom.name);
  }, [bcSwapPair.swapFrom]);

  return (
    <BCSwapWrapper>
      <div className="label">
        <Box display="flex" alignItems="center">
          <Typography fontSize="14px">You get Approximately</Typography>
          <CircularProgress
            className="progress_circle"
            style={{ width: '15px', height: '15px' }}
            variant="determinate"
            thickness={7}
          />
        </Box>
        <Typography
          fontSize="small"
          style={{ cursor: 'pointer', fontWeight: 600 }}
        >
          Record
        </Typography>
      </div>
      <SwapBody>
        <Box position="relative">
          <SelectCoin
            options={swapFromList}
            value={bcSwapPair.swapFrom}
            handleSelect={handleChangeSwapFrom}
          >
            <Typography fontSize="small">Send</Typography>
            <Typography color="white" fontWeight={700}>
              0
            </Typography>
            <div className="max-box">
              <Typography>Max</Typography>
            </div>
          </SelectCoin>
          <SelectCoin
            options={swapToList}
            value={bcSwapPair.swapTo}
            handleSelect={handleChangeSwapTo}
          >
            <Typography fontSize="small">Get</Typography>
            <Typography color="white" fontWeight={700}>
              0
            </Typography>
          </SelectCoin>
          <div
            className="swap-box"
            onClick={() => {
              setBcSwapPair((prev) => ({
                swapFrom: prev.swapTo,
                swapTo: prev.swapFrom,
              }));
            }}
          >
            <SwapVertRoundedIcon />
          </div>
        </Box>
        <div className="tips-box">
          <Typography fontSize="small" className="item cut-time">
            {`1 ${bcSwapPair.swapFrom.name} ≈ 0.06832522 ${bcSwapPair.swapTo.name}`}
          </Typography>
          <Typography fontSize="small">
            Estimated Time* <span color="white">Seconds</span>
          </Typography>
          <Typography fontSize="small">
            Swap fee: <span>0.00000000</span> {bcSwapPair.swapFrom.name}
          </Typography>
        </div>
        <div className="swap-now">
          <Button variant="conic2" disabled>
            Swap Now
          </Button>
        </div>
      </SwapBody>
    </BCSwapWrapper>
  );
};

export default BCSwap;
