import React from 'react';
import SubscriptionCrud from '../components/SubscriptionCrud';
import Box from '@mui/material/Box';

export default function Subscription() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
        padding: '0 16px'
      }}
    >
      <SubscriptionCrud />
    </Box>
  );
}
