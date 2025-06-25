import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const pokemons = [
	{
		name: 'Bulbasaur',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
		type: 'Grama/Veneno',
	},
	{
		name: 'Charmander',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
		type: 'Fogo',
	},
	{
		name: 'Squirtle',
		image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
		type: 'Água',
	},
    {
        name: 'Pidgey',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
        type: 'Normal/Voador',
    },
    {
        name: 'Rattata',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
        type: 'Normal',
    },
    {
        name: 'Jigglypuff',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
        type: 'Fada/Normal',
    },
    {
        name: 'Zubat',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
        type: 'Venenoso/Voador',
    },
    {
        name: 'Meowth',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
        type: 'Normal',
    },
    {
        name: 'Psyduck',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        type: 'Água',
    },
    {
        name: 'Machop',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
        type: 'Lutador',
    },
    {
        name: 'Magnemite',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
        type: 'Elétrico/Metálico',
    },
];

export default function PokemonList() {
	return (
		<div>
			<Typography variant="h2" align="center" gutterBottom>
				Lista de Pokémons
			</Typography>
			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="center"
				gap={{ xs: 1, sm: 2, md: 3 }}
				maxWidth={1100}
				mx="auto"
				px={{ xs: 1, sm: 2, md: 0 }}
			>
				{pokemons.map((pokemon) => (
					<Box
						key={pokemon.name}
						flex="1 0 20%"
						minWidth={160}
						maxWidth={200}
						mb={2}
					>
						<Card sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}>
							<CardMedia
								component="img"
								height="140"
								image={pokemon.image}
								alt={pokemon.name}
								sx={{ objectFit: 'contain', background: '#f6f6f6' }}
							/>
							<CardContent>
								<Typography variant="h6" component="div" align="center">
									{pokemon.name}
								</Typography>
								<Typography variant="body2" color="text.secondary" align="center">
									{pokemon.type}
								</Typography>
							</CardContent>
						</Card>
					</Box>
				))}
			</Box>
		</div>
	);
}
