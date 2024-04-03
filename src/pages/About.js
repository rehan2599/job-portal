import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography>
        Information about the job portal and its mission...
      </Typography>
    </Box>
  );
};

export default About;
