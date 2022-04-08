import { RecipeList } from '../../components/RecipeList/RecipeList';
import { Container, Box, Button } from '@mui/material';

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{marginBottom: 2, textAlign: 'right'}}>
        <Button variant="contained" href="/new" className='new-recipe'>Create New Recipe</Button>
      </Box>
      <RecipeList></RecipeList>
    </Container>
  );
};