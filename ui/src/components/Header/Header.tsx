import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

export const Header = () => {  
    return (
        <Box sx={{backgroundColor: 'primary.dark', padding: 3, marginBottom: 4}}>
            <Container maxWidth="sm">
                <Typography variant="h1" sx={{ fontSize: {lg: 50, md: 40, sm: 30, xs: 30}, width: '100%', color: 'white' }}>Top Notch Recipes</Typography>
            </Container>
        </Box>
    );
};