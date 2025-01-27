export type Theme = 'dark' | 'light';

export interface ThemeContext {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
}
