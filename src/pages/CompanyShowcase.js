// import React from 'react';
// import { Box, Typography } from '@mui/material';
// const CompanyShowcase = () => {
//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom>Company Showcase</Typography>
//       <Typography>
//         Gallery of companies...
//       </Typography>
//     </Box>
//   );
// };
// export default CompanyShowcase;

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from '@mui/material';

const companies = [
  {
    id: 1,
    name: 'Tech Innovate',
    description: 'Pioneering new technologies to simplify everyday tasks.',
    imageUrl: 'https://source.unsplash.com/random/300x300?tech',
    websiteUrl: 'https://example.com',
  },
  {
    id: 2,
    name: 'Green Future',
    description: 'Leading the way in sustainable energy solutions.',
    imageUrl: 'https://source.unsplash.com/random/300x300?energy',
    websiteUrl: 'https://example.com',
  },
  {
    id: 3,
    name: 'Technology Leaders',
    description: 'Connecting business and technology.',
    imageUrl: 'https://source.unsplash.com/random/300x300?tech',
    websiteUrl: 'https://example.com',
  },
];

const CompanyShowcase = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom component="h1">
        Company Showcase
      </Typography>
      <Grid container spacing={4}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={company.imageUrl}
                alt={company.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.description}
                </Typography>
                <Button size="small" color="primary" href={company.websiteUrl} sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;
