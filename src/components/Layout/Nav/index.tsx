import Light from '@/components/UI/icons/Light';
import Dark from '@/components/UI/icons/Dark';

import styles from './nav.module.css';

export default function Nav() {
  const isLightMode = true;
  const themeModeIcon = isLightMode ? (
    <Light className={styles.ligh} />
  ) : (
    <Dark className={styles.dark} />
  );

  return <nav className={styles.nav}>{themeModeIcon}</nav>;
}
