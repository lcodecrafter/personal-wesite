import React, { ReactNode } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

type theme = 'dark' | 'light';

interface ctx {
  theme: 'light' | 'dark';
  themeHandler: (t: theme) => void;
}

interface providerProps {
  children: ReactNode;
}

export const themeCtx = React.createContext<ctx>({
  theme: 'light',
  themeHandler: (t: theme) => {},
});

export function ThemeProvider({ children }: providerProps) {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<theme>(
    'theme',
    defaultDark ? 'dark' : 'light',
  );

  const themeHandler = (theme: theme) => {
    setTheme(theme);
  };

  return (
    <themeCtx.Provider value={{ theme, themeHandler }}>
      {children}
    </themeCtx.Provider>
  );
}
