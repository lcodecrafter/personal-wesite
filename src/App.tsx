import { useContext } from 'react';
import { themeCtx } from './store/ThemeContext';
import Home from './pages/Home';
import styles from './App.module.css';

function App() {
  const ctx = useContext(themeCtx);
  return (
    <div className={`${styles.app} ${ctx.theme}`}>
      <Home />
    </div>
  );
}

export default App;
