import React, { useState } from 'react';
import ArrowUp from '../UI/icons/ArrowUp';
import ArrowDown from '../UI/icons/ArrowDown';
import Button from '../UI/Button';
import styles from './job.module.css';
import { Console } from 'console';

interface props {
  children: React.ReactNode;
  imageData: { path: string; alt: string };
  position: string;
  years: { from: number; to: number };
}

export default function Job({ children, imageData, position, years }: props) {
  const [displayText, setDisplayText] = useState(false);
  const toogleText = () => {
    setDisplayText(prev => !prev);
  };
  const arrow = displayText ? (
    <ArrowUp heigth="16px" width="16px" />
  ) : (
    <ArrowDown heigth="16px" width="16px" />
  );

  const achievementsClasses =
    styles.achievements + ' ' + (displayText ? styles.open : styles.close);

  console.log(achievementsClasses);
  console.log(displayText);

  return (
    <div>
      <div className={styles.company}>
        <div>
          <img
            className={styles.img}
            src={imageData.path}
            alt={imageData.alt}
          />
        </div>
        <div className={styles.company_info}>
          <span className="f-big">{position}</span>
          <br />
          <span className={styles.years}>
            From {years.from} to {years.to}
          </span>
        </div>
      </div>
      <div className={achievementsClasses}>{children}</div>
      <div className={styles.readmore}>
        <Button className={styles.button} onClick={toogleText}>
          <span className={`${styles.readmore} f-mall`}>Read more</span>
          {arrow}
        </Button>
      </div>
    </div>
  );
}
