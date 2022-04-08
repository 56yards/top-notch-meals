import { Paper, Link, Typography } from '@mui/material';

type RecipeListItemProps = {
    id: number,
    name: string
}

export const RecipeListItem = ({id, name}: RecipeListItemProps) => {
    return (
        <Paper style={{margin: '15px 0', padding: '25px'}} className="recipe-item">
            <Typography variant="h5">
                <Link href={"/recipes/" + id} underline="hover">{name}</Link>
            </Typography>
        </Paper>
    );
};