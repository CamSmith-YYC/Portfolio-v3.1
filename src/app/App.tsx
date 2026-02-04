import { Button, Container, createTheme, CssBaseline, Slider, Stack, TextField, ThemeProvider } from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Header from "../components/layout/Header"
import SideContactWidget from "../components/ui/SideContactWidget"

const theme = createTheme({
  typography: {
    fontFamily: 'Press Start 2P, system-ui, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="xs">
        <Stack gap={2}>
          <TextField label="Sample Input" variant="outlined" />
          <Slider defaultValue={30} aria-label="Sample Slider" />
          <Button startIcon={<AutoAwesomeRoundedIcon />} variant="contained">Submit</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Container>
      <SideContactWidget />
    </ThemeProvider>
  );
}

export default App
