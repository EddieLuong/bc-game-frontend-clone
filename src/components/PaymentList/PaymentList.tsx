import { Typography } from '@mui/material';
import React from 'react';

import { PaymentListWrapper } from './styles';

interface PaymentListProps {
  paymentList: { img: string; value: string }[];
  onChoosePaymentMethod: (paymentMethod) => void;
}

const PaymentList = ({
  paymentList,
  onChoosePaymentMethod,
}: PaymentListProps) => {
  return (
    <PaymentListWrapper>
      {paymentList.map((paymentMethod) => (
        <div
          key={paymentMethod.value}
          className="payment-item"
          onClick={() => onChoosePaymentMethod(paymentMethod)}
        >
          <img className="payment-logo" src={paymentMethod.img} alt="" />
          <Typography fontSize="small">{paymentMethod.value}</Typography>
        </div>
      ))}
    </PaymentListWrapper>
  );
};

export default PaymentList;
