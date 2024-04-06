import React from 'react';
import { Container, Typography, Card, CardContent, Grid, styled } from '@mui/material';

// Styled components for better control and readability
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundImage: `url(${process.env.PUBLIC_URL}/asset2.jpg)`, // Set background image
  backgroundSize: 'cover', // Cover the entire area
  backgroundPosition: 'center', // Center the image
  color: 'white', // Set text color to white
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.15s ease-in-out, background-color 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    color: 'white',
    backgroundColor: '#00214D', // Set to transparent on hover
    boxShadow: theme.shadows[10],
  },
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

function Home() {
  return (
    <StyledContainer maxWidth={false}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome to RK Jobs Portal
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        Find Your Dream Job or Showcase Your Company With Us
      </Typography>
      <Grid container spacing={4}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <StyledCardContent>
                <Typography variant="h6" gutterBottom>Job Title #{index + 1}</Typography>
                <Typography variant="body1">
                  This is a brief description of what this job entails. Apply now to become part of our amazing team!
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default Home;
