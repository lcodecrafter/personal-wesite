import { ReactNode } from 'react';

import { useThemeProvider } from './useThemeProvider';
import { ThemeContext } from './types';
import React from 'react';

interface providerProps {
  children: ReactNode;
}

export const themeCtx = React.createContext<ThemeContext>({
  theme: 'light',
  setTheme: () => {},
});

export function ThemeProvider({ children }: providerProps) {
  const { theme, setTheme } = useThemeProvider();
  return (
    <themeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </themeCtx.Provider>
  );
}
