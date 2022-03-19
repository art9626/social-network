import { createTheme, ThemeProvider } from '@mui/material';
import React, { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorTheme: React.FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = createTheme({
    palette: { 
      mode,
    },
  });

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};