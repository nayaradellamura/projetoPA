import React from 'react';
import { Box, TextField, Button, Typography, Link, CssBaseline } from '@mui/material';
import logo from "../../../assets/img/logo.png";

export default function Login() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', 
          backgroundColor: '#f5f5f5',
          margin: 0,
          padding: 0,
          overflow: 'hidden', 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            p: 3,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: 5,
            width: { xs: '90%', sm: 350 },
            maxWidth: 400,
            textAlign: 'center',
          }}
        >
          <img
            src={logo}
            alt="Logo Solaro Marketplace"
            style={{ maxWidth: '150px', marginBottom: 20 }}
          />
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: '1.25rem',
              color: '#1d4fa4',
            }}
          >
            Login
          </Typography>

          <Box
            component="form"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{
                backgroundColor: '#f7f7f7',
                borderRadius: 2,
              }}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              variant="outlined"
              sx={{
                backgroundColor: '#f7f7f7',
                borderRadius: 2,
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#1d4fa4',
                '&:hover': { backgroundColor: '#173d7a' },
                borderRadius: 3,
                fontWeight: 'bold',
                padding: '12px',
              }}
            >
              Entrar
            </Button>
          </Box>

          <Typography sx={{ mt: 2, fontSize: '0.8rem' }}>
            Não tem uma conta?{' '}
            <Link
              href="/cadastro"
              sx={{
                color: '#1d4fa4',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Cadastrar-se
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
