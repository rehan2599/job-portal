import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Container } from '@mui/material';
import placeholderImg from '../images/placeholder.png';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const baseURL = 'http://localhost:5000'; // Adjust based on your server address

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const API_URL = `${baseURL}/user/getAll`; // Directly use baseURL in your API_URL
        const response = await axios.get(API_URL);
        setCompanies(response.data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Container maxWidth="lg"> {/* Use Container to control the max width */}
      <Box py={5}> {/* Add more padding for aesthetic spacing */}
        <Typography variant="h4" gutterBottom align="center"> {/* Center align the title */}
          Company Showcase
        </Typography>
        <Grid container spacing={4}>
          {companies.map(company => (
            <Grid item xs={12} sm={6} md={4} key={company._id}>
              <Card>
                <CardMedia
                  component="img"
                  image={company.imagePath ? `${baseURL}/${company.imagePath.replace(/\\/g, '/')}` : placeholderImg} // Placeholder with adjusted size
                  alt={company.fullName}
                  sx={{
                    height: 200, // Uniform height
                    objectFit: 'cover', // Cover the space without distortion
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" align="center"> {/* Center align the text */}
                    {company.fullName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyShowcase;
