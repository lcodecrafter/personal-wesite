import Light from '@/components/UI/icons/Light';
import Dark from '@/components/UI/icons/Dark';

import styles from './nav.module.css';
import { useContext } from 'react';
import { themeCtx } from '@/store/ThemeContext';

export default function Nav() {
  const ctx = useContext(themeCtx);

  const themeModeIcon =
    ctx.theme === 'dark' ? (
      <Light height="30px" width="30px" className={styles.ligh} />
    ) : (
      <Dark height="30px" width="30px" className={styles.dark} />
    );

  const onButtonClick = () => {
    ctx.themeHandler(ctx.theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={styles.nav}>
      <button onClick={onButtonClick} className={styles['btn-circle']}>
        {themeModeIcon}
      </button>
    </nav>
  );
}
