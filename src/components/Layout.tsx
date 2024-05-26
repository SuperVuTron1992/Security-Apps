import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

// interface LayoutProps {}
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
    yellow: Palette['primary'];
    red: Palette['primary'];
    white: Palette['primary'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
    red?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

const theme: any = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  palette: {
    primary: {
      main: '#002A4D',
    },
    green: {
      main: '#4CA341',
    },
    yellow: {
      main: '#FFAE07',
    },
    red: {
      main: '#DA1F33',
    },
    white: {
      main: '#FFFFFF',
    },
  },
});

const pageContent: { style: CSSProperties } = {
  style: {
    height: '100%',
  },
};

const Layout: React.FC<{}> = () => {
  return (
    <>
      <Container
        sx={{ fontFamily: "'Montserrat', sans-serif" }}
        disableGutters
        maxWidth={false}
      >
        <ThemeProvider theme={theme}>
          <Stack direction={'column'}>
            <div style={pageContent.style}>
              <Outlet />
            </div>
          </Stack>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Layout;
