import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  CssBaseline,
  Select, 
  MenuItem
} from '@mui/material';
import { Email, Phone, AccountCircle, Password } from '@mui/icons-material';

export default function Formulario() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    cpfCnpj: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    contato: '',
    tipoUsuario: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
          p: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            p: 4,
            borderRadius: 4,
            width: { xs: '100%', sm: '80%', md: '60%' },
            maxWidth: '900px',
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: '#1d4fa4', mb: 3, textAlign: 'center' }}
          >
            Cadastrar Usuário
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ color: '#1d4fa4', mb: 2 }}>
              Informações Pessoais
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="name">Nome ou Razão Social</InputLabel>
                  <OutlinedInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
                    label="Nome ou Razão Social"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="cpfCnpj">CPF ou CNPJ</InputLabel>
                  <OutlinedInput
                    id="cpfCnpj"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleInputChange}
                    label="CPF ou CNPJ"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start"><Email /></InputAdornment>}
                    label="Email"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="contato">Contato</InputLabel>
                  <OutlinedInput
                    id="contato"
                    name="contato"
                    value={formData.contato}
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start"><Phone /></InputAdornment>}
                    label="Contato"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="senha">Senha</InputLabel>
                  <OutlinedInput
                    id="senha"
                    name="senha"
                    type='password'
                    value={formData.senha}
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start"><Password /></InputAdornment>}
                    label="Senha"
                  />
                </FormControl>
              </Grid>

<Grid item xs={12} sm={6}>
  <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
    <InputLabel id="tipoUsuario-label">Tipo de Usuário</InputLabel>
    <Select
      labelId="tipoUsuario-label"
      id="tipoUsuario"
      name="tipoUsuario"
      value={formData.tipoUsuario}
      onChange={handleInputChange}
      label="Tipo de Usuário"
    >
      <MenuItem value=""><em>Selecione</em></MenuItem>
      <MenuItem value="cliente">Cliente</MenuItem>
      <MenuItem value="fornecedor">Fornecedor</MenuItem>
    </Select>
  </FormControl>
</Grid>

            </Grid>

            <Typography variant="h6" sx={{ color: '#1d4fa4', my: 3 }}>
              Endereço
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="cep">CEP</InputLabel>
                  <OutlinedInput
                    id="cep"
                    name="cep"
                    value={formData.cep}
                    onChange={handleInputChange}
                    label="CEP"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="rua">Rua</InputLabel>
                  <OutlinedInput
                    id="rua"
                    name="rua"
                    value={formData.rua}
                    onChange={handleInputChange}
                    label="Rua"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="numero">Número</InputLabel>
                  <OutlinedInput
                    id="numero"
                    name="numero"
                    value={formData.numero}
                    onChange={handleInputChange}
                    label="Número"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="bairro">Bairro</InputLabel>
                  <OutlinedInput
                    id="bairro"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleInputChange}
                    label="Bairro"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="cidade">Cidade</InputLabel>
                  <OutlinedInput
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    label="Cidade"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="estado">Estado</InputLabel>
                  <OutlinedInput
                    id="estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    label="Estado"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#f7f7f7', borderRadius: 2 }}>
                  <InputLabel htmlFor="pais">País</InputLabel>
                  <OutlinedInput
                    id="pais"
                    name="pais"
                    value={formData.pais}
                    onChange={handleInputChange}
                    label="País"
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                backgroundColor: '#1d4fa4',
                '&:hover': { backgroundColor: '#173d7a' },
                borderRadius: 3,
                fontWeight: 'bold',
                padding: '12px',
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
