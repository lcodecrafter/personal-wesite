import { ReactNode } from 'react';
import Nav from './Nav';
import styles from './layout.module.css';

interface props {
  children: ReactNode;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
}
