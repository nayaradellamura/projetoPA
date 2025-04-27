// src/app/pages/home/Home.jsx
import React from 'react';
import { Box, Button, Typography, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

export default function Home() {
  const navigate = useNavigate(); 

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1d4fa4 0%, #173d7a 100%)',
          color: 'white',
          textAlign: 'center',
          padding: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          }}
        >
          Bem-vindo ao Solaro Marketplace
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: 300,
            fontSize: { xs: '1rem', md: '1.5rem' },
            maxWidth: 600,
          }}
        >
         vai mudar essa tela ainda :)
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'white',
            color: '#1d4fa4',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            padding: '12px 30px',
            borderRadius: 3,
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      </Box>
    </>
  );
}
