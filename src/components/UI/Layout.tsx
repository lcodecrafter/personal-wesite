import { ReactNode } from 'react';
import styles from './layout.module.css';

interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
