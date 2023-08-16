import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">E-Commerce Store</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
