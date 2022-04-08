import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { RecipeCreateType } from "../../types/RecipeCreate";
import { Container, Box, Typography, Button, TextField, Link, Alert} from "@mui/material";

export const RecipeCreate = () => {
    const history = useHistory();
    const [values,setValues] = useState<RecipeCreateType>({name : "", ingredients : "", method : ""});

    const handleInputValue = (e: any) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3080/recipes', {
              method: "post",
              headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
              }),
              body: JSON.stringify(values)
            });

            if (response.status === 200) {
                const recipe = await response.json();
                window.location.href = `/recipes/${recipe.id}`;
            }
          } catch (ex) {
            return false;
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant={"h5"} sx={{marginBottom: 4}}>Create new Recipe</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField label={"Enter Recipe Name Here"} name={"name"} fullWidth onBlur={handleInputValue} onChange={handleInputValue}/>
                <TextField label={"Enter the recipes ingredients and any measurements here"} name={"ingredients"} multiline rows={4} fullWidth onBlur={handleInputValue} onChange={handleInputValue} sx={{marginTop: 4}}/>
                <TextField label={"Enter the recipes cooking methods here"} name={"method"} multiline rows={4} fullWidth onBlur={handleInputValue} onChange={handleInputValue} sx={{marginTop: 4}}/>
                <Alert severity="info" sx={{marginTop: 4, marginBottom: 5}}>Tip! Use newlines in the box to seperate out ingredients and cooking methods</Alert>
                <Box sx={{marginBottom: 2}}>
                    <Button type={"submit"} variant={"contained"} name="submit">Save for later</Button>
                    &nbsp; or <Link component="button" variant="body2" name="cancel" onClick={() => history.goBack()}>Cancel</Link>
                </Box>     
            </form>
        </Container>
    );
};