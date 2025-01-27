import { useContext } from 'react';
import { themeCtx } from './providers/theme';
import Home from './pages/Home';
import styles from './App.module.css';

function App() {
  const { theme } = useContext(themeCtx);
  return (
    <div className={`${styles.app} ${theme}`}>
      <Home />
    </div>
  );
}

export default App;
