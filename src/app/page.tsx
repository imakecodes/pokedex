"use client";

import { Typography, TextField, Box, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import PokemonList from '@/components/PokemonList';

export default function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Função de busca (a ser implementada)
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="30vh">
      <Box mb={4} textAlign="center">
        <Typography variant="h1" align="center">Pokédex</Typography>
          <TextField
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar Pokemon"
            variant="outlined"
            sx={{ mt: 2, width: '80%', maxWidth: 700, borderRadius: 5, '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {search && (
                      <IconButton onClick={handleClear} aria-label="limpar" size="small">
                        <ClearIcon />
                      </IconButton>
                    )}
                    <IconButton onClick={handleSearch} aria-label="buscar">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            }}
          />
      </Box>
      <PokemonList />
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Desenvolvido por <a href="https://github.com/imakecodes">Michel Wilhelm</a> | Thanks <a href="https://pokeapi.co/">PokeAPI</a> por fornecer os dados dos Pokémons.
        </Typography>
      </Box>
    </Box>
  );
}
