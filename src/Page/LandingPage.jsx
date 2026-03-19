import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './sections/AppAppBar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Habilities from './sections/Habilities';
import Footer from './sections/Footer';
import getLPTheme from './getLPTheme';
import About from './sections/About';
import Contact from './sections/Contact';

export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
        <About />
        <Divider />
        <Habilities />
        <Divider />
        <Projects />
        <Divider />
        <Services />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}