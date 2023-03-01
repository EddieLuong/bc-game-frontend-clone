import React, { useState } from 'react';
import { logoBcGame } from '../../assets/images';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Box from '@mui/material/Box';

import { LogoBox, MenuIconButton, SideBarWrapper } from './styles';

const SideBar = () => {
  const [isSideBarCollapse, setIsSideBarCollapse] = useState(false);

  const handleToggleSideBar = () => {
    setIsSideBarCollapse((prev) => !prev);
  };
  return (
    <SideBarWrapper $isCollapse={isSideBarCollapse}>
      <LogoBox>
        <MenuIconButton onClick={() => handleToggleSideBar()}>
          <MenuRoundedIcon />
        </MenuIconButton>
        {!isSideBarCollapse && (
          <Box sx={{ cursor: 'pointer', display: 'flex', marginLeft: '18px' }}>
            <img className="logo_bc_game" src={logoBcGame} alt="logo_bc_game" />
          </Box>
        )}
      </LogoBox>
    </SideBarWrapper>
  );
};

export default SideBar;
