import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Link
} from '@mui/material';

// Replace with your actual image path or URL
const imagePath = 'https://source.unsplash.com/random/800x600';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Connecting Talent with Opportunity
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        Welcome to SwiftJobs, where the perfect match between talent and opportunity is made.
      </Typography>
      <Typography paragraph align="center">
        We understand that finding the right job or the ideal candidate can be a daunting task. That's why we're here to simplify the process and make it as seamless as possible.
      </Typography>
      <Box my={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              At Swift-Jobs, our mission is simple: to connect talented individuals with their dream jobs and help companies find the perfect fit for their teams. We strive to create a platform where both job seekers and employers can thrive, fostering meaningful connections that drive success and growth.
            </Typography>
            <Typography variant="h4" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography paragraph>
              Comprehensive Job Listings: We offer an extensive database of job listings spanning various industries, ensuring that there's something for everyone.
            </Typography>
            {/* Include additional points under 'Why Choose Us?' here */}
            <Typography variant="h4" gutterBottom>
              Get Started Today
            </Typography>
            <Typography paragraph>
              Whether you're a job seeker ready to take the next step in your career journey or an employer looking to build a stellar team, SwiftJobs is here to help. Join our community today and let us help you find success.
            </Typography>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography paragraph>
              Have questions or feedback? We'd love to hear from you! Reach out to our friendly team via <Link href="mailto:shaikh.ro@northeastern.edu">email</Link> or phone, and we'll be happy to assist you.
            </Typography>
            <Typography paragraph>
              Thank you for choosing Swift Jobs– where opportunities await!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0}>
              <img src={imagePath} alt="About Us" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
