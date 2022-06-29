import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../assets/css/Login.css";

const Copyright = (props: any) => {
    return (
        <Typography sx={{}} variant="body2" color="text.secondary" align="center" {...props}>
            {'Powered By @Backend Team'}
        </Typography >
    );
}

const sinUp = (e: any) => {
    e.preventDefault();
    console.log("submited");
    // later we can submit to an acutal API

}

const theme = createTheme({
    palette: {
        background: {
            default: "#B1BCE6"
        }
    }
});

const Register = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container className='content-form ' component="main" maxWidth="xs">
                <div className='register-form '>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={sinUp} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                autoComplete="fasle"

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="false"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                            <Grid container>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default Register