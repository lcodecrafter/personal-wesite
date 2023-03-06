import React, { ReactNode } from 'react';
import styles from './button.module.css';

interface props {
  children: ReactNode;
  className?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function Button({ children, className = '', onClick }: props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick || function () {}}
    >
      {children}
    </button>
  );
}
