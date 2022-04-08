import { useEffect, useState } from 'react';
import { RecipesType } from '../../types/Recipes';
import { RecipeListItem } from '../RecipeListItem/RecipeListItem';
import { TextField } from '@mui/material';

export const RecipeList = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState<RecipesType>([{id: 0, name: '', ingredients: '', method: ''}]);

    const filteredRecipes = recipes.filter(
      recipe => {
        return (
          recipe
          .name
          .toLowerCase()
          .includes(query.toLowerCase())
        );
      }
    );

    useEffect(() => {
      getRecipes();
    }, []);
  
    const getRecipes = async () => {
      const response = await fetch(`http://localhost:3080/recipes`);
      const data = await response.json();

      setRecipes(data);
    };

    
    const handleChange = (e: any) => {
      setQuery(e.target.value);
    }

    function recipesList() {
      return (
        <div>
          {filteredRecipes.map(recipe => (
             <RecipeListItem key={recipe.id} id={recipe.id} name={recipe.name}></RecipeListItem>
          ))}
        </div>
      );
    }

    return (
      <div>
          <TextField id="standard-basic" label="Search for a favourite recipe" onChange={handleChange} variant="filled" fullWidth margin="dense" name="search" />
          {recipesList()}
      </div>
    );
};