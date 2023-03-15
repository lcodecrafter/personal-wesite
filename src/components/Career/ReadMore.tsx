import Button from '../UI/Button';
import ArrowUp from '../UI/icons/ArrowUp';
import ArrowDown from '../UI/icons/ArrowDown';
import st from './readMore.module.css';
import React from 'react';

interface props {
  clickHandler: (e: React.MouseEvent) => void;
  arrowType: 'up' | 'down';
}

export default function ReadMore({ clickHandler, arrowType }: props) {
  const arrow =
    arrowType === 'up' ? (
      <ArrowUp height="16px" width="16px" />
    ) : (
      <ArrowDown height="16px" width="16px" />
    );

  return (
    <div className={st.readmore}>
      <Button onClick={clickHandler}>
        <span className="f-mall">Read more</span>
        {arrow}
      </Button>
    </div>
  );
}
