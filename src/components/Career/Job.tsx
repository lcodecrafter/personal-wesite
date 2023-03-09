import React, { useState, useRef } from 'react';
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
  const handleClickToogle = () => {
    setDisplayText(prev => !prev);
  };
  const arrow = displayText ? 'up' : 'down';

  const achievementsClasses =
    st.achievements + ' ' + (displayText ? st.open : '');

  const button = (
    <ReadMore arrowType={arrow} clickHandler={handleClickToogle} />
  );

  return (
    <div className={st.container}>
      <div className={st.company}>
        <div>
          <img className={st.img} src={imageData.path} alt={imageData.alt} />
        </div>
        <div className={st.company_info}>
          <span className={`${st['job-position']} f-big`}>{position}</span>
          <br />
          <span className={st.years}>
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
