import React, { useState, useRef } from 'react';
import ReadMore from './ReadMore';
import styles from './job.module.css';

interface props {
  children: React.ReactNode;
  imageData: { path: string; alt: string };
  position: string;
  years: { from: number; to: number };
}

export default function Job({ children, imageData, position, years }: props) {
  const [displayText, setDisplayText] = useState(false);
  const handleClickToogle = () => {
    setDisplayText(prev => !prev);
  };
  const arrow = displayText ? 'up' : 'down';

  const achievementsClasses =
    styles.achievements + ' ' + (displayText ? styles.open : '');

  const button = (
    <ReadMore arrowType={arrow} clickHandler={handleClickToogle} />
  );

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
      {!displayText ? button : ''}
      <div className={achievementsClasses}>
        {children}
        {button}
      </div>
    </div>
  );
}
