import { useEffect } from 'react';
import { Theme } from './types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function useThemeProvider() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<Theme>(
    'theme',
    defaultDark ? 'dark' : 'light',
  );

  useEffect(() => {
    document.querySelector('body')!.className = theme;
  }, [theme]);

  return { theme, setTheme };
}
