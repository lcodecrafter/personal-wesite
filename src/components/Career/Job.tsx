import React, { useState } from 'react';
import ReadMore from './ReadMore';
import st from './job.module.css';

interface props {
  children: React.ReactNode;
  imageData: { path: string; alt: string };
  position: string;
  years: { from: number; to: number };
}

export default function Job({ children, imageData, position, years }: props) {
  const [displayText, setDisplayText] = useState(false);
  const [displayMainButton, setDisplayMainButton] = useState(true);

  const arrow = displayText ? 'up' : 'down';
  const achievementsClasses =
    st.achievements + ' ' + (displayText ? st.open : '');

  //TODO: Refactor this function
  const handleClickToggle = (_: React.MouseEvent, showMainButton = false) => {
    setDisplayText(prev => !prev);
    if (showMainButton) {
      setTimeout(() => setDisplayMainButton(showMainButton), 550);
    } else {
      setDisplayMainButton(showMainButton);
    }
  };

  const mainButton = displayMainButton ? (
    <ReadMore arrowType={arrow} clickHandler={handleClickToggle} />
  ) : (
    ''
  );

  const secondaryButton = (
    <ReadMore
      arrowType={arrow}
      clickHandler={(e: React.MouseEvent) => handleClickToggle(e, true)}
    />
  );

  return (
    <div className={st.container}>
      <div className={st.company}>
        <div>
          <img className={st.img} src={imageData.path} alt={imageData.alt} />
        </div>
        <div className={st.company_info}>
          <span className={`${st['job-position']} f-big`}>{position}</span>

          <span className={st.years}>
            From {years.from} to {years.to}
          </span>
          <div className={st['button-container']}>{mainButton}</div>
        </div>
      </div>
      <div className={achievementsClasses}>
        {children}
        {secondaryButton}
      </div>
    </div>
  );
}
