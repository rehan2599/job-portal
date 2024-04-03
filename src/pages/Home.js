import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import NavigationBar from '../components/NavigationBar';

function Home() {
  return (
    <>
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to RK Jobs Portal
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Find Your Dream Job or Showcase Your Company With Us
      </Typography>
      <Grid container spacing={4}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Job Title #{index + 1}</Typography>
                <Typography variant="body1">
                  This is a brief description of what this job entails. Apply now to become part of our amazing team!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
   
  );
}

export default Home;
