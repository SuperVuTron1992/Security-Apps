import React from 'react';
import { useTheme } from '@mui/material/styles';

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ background: theme.palette.green.main }}>hello there </div>
    </>
  );
};

export default HomePage;
