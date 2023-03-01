import '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    conic1: true;
    conic2: true;
    active: true;
  }
}
