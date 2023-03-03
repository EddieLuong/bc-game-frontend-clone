import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MuiDialog from '@mui/material/Dialog';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CloseBox, DialogBody, DialogHeader, DialogWrapper } from './styles';

interface DialogProps {
  title: string;
  dialogHeaderChild?: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  hasCloseBtn?: boolean;
  children: React.ReactNode;
}

const Dialog = ({
  title = '',
  isOpen,
  handleClose,
  children,
  hasCloseBtn,
  dialogHeaderChild,
}: DialogProps) => {
  return (
    <MuiDialog
      open={isOpen}
      onClose={handleClose}
      transitionDuration={500}
      PaperProps={{ style: { backgroundColor: 'unset', overflowY: 'hidden' } }}
    >
      <Grow in={isOpen} timeout={{ enter: 500 }}>
        <DialogWrapper>
          <DialogHeader $hasCloseBtn={hasCloseBtn}>
            <Typography className="dialog-title">{title}</Typography>
            <div>{dialogHeaderChild}</div>
            {hasCloseBtn && (
              <CloseBox onClick={() => handleClose()}>
                <IconButton className="close-btn">
                  <CloseRoundedIcon />
                </IconButton>
              </CloseBox>
            )}
          </DialogHeader>
          <DialogBody>{children}</DialogBody>
        </DialogWrapper>
      </Grow>
    </MuiDialog>
  );
};

Dialog.defaultProps = {
  hasCloseButton: false,
  dialogHeaderChild: null,
};

export default Dialog;
