import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeType } from '../../types/Recipe';
import { Container, Box, Paper, Link, InputLabel, Typography } from '@mui/material';

export const RecipeView = () => {
    const { id } = useParams<{id: string}>();
    const [recipe, setRecipe] = useState<RecipeType>({id: 0, name: '', ingredients: '', method: ''});

    useEffect(() => {
      getRecipe();
    }, []);
  
    const getRecipe = async () => {
      const response = await fetch(`http://localhost:3080/recipes/${id}`);
      const data = await response.json();
      setRecipe({id: data.id, name: data.name, ingredients: data.ingredients, method: data.method});
      const result = recipe.method.split(/\r?\n/);
    };

    return (
        <Container maxWidth="sm">
            <InputLabel>Name of Recipe</InputLabel>
            <Typography variant="h4">{recipe.name ?? ''}</Typography>

            <InputLabel sx={{marginTop: 4, marginBottom: 2}}>List of Ingredients:</InputLabel>
            {recipe.ingredients.split(/\r?\n/).map(ingredient => (
                <Paper style={{margin: '15px 0', padding: '25px'}} className="ingredients">{ingredient}</Paper>
            ))}

            <InputLabel sx={{marginTop: 4, marginBottom: 2}}>Cooking Methods:</InputLabel>
            {recipe.method.split(/\r?\n/).map(method => (
                <Paper style={{margin: '15px 0', padding: '25px'}} className="method">{method}</Paper>
            ))}

            <Box sx={{marginTop: 6}}>
                <Link href="/" variant="body2" underline="hover" className='go-back'>View all recipes</Link>
            </Box>           
        </Container>
    )
};