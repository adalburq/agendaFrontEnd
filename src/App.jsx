import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import { Select, FormControl, InputLabel, MenuItem, CircularProgress } from '@mui/material';
import Menu from './Menu';
import api from './services/api';
import AppSelect from './components/AppSelect';

export default function App() {
  const [profissionais, setProfissionais] = useState([]);
  const [servicos, setServicos] = useState([]);
  
  useEffect(() => {
    if(!profissionais.length) {
      api.genericList('/profissionais').then(r => {
        setProfissionais(r.data);
      });
    }

    if(!servicos.length) {
      api.genericList('/servicos').then(r => {
        setServicos(r.data);
      });
    }
  });

  const fn = (items) => items.map(({ id, nome }) => (<MenuItem value={ id } key={id}>{nome}</MenuItem>));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm">
      <Box sx={{ my: 2, mx: 12 }}>
        <Menu />
      </Box>
        <Box sx={{ my: 2, mx: 12 }}>
            <AppSelect id="profissionais" label="Profissionais" items={ profissionais } fn={fn} onChange = {console.log}/>
        </Box>

        <Box sx={{ my: 2, mx: 12 }}>
          <AppSelect id="servicos" label="Serviços" items={ servicos } fn={fn} onChange = {alert}/>
        </Box>

        <Box sx={{ my: 2, mx: 12 }}>
          <DateCalendar />
        </Box>

      </Container>
    </LocalizationProvider>
  );
}