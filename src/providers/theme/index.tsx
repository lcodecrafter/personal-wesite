import { ReactNode } from 'react';
import { useThemeProvider } from './useThemeProvider';
import { themeCtx } from './context';

interface providerProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: providerProps) {
  const { theme, setTheme } = useThemeProvider();
  return (
    <themeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </themeCtx.Provider>
  );
}
