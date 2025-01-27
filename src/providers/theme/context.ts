import { ThemeContext } from './types';
import React from 'react';

export const themeCtx = React.createContext<ThemeContext>({
  theme: 'light',
  setTheme: () => {},
});
