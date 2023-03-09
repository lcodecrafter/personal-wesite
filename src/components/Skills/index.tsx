import Css from '../UI/icons/Css';
import Git from '../UI/icons/Git';
import Html from '../UI/icons/Html';
import Javascript from '../UI/icons/Javascript';
import Mongodb from '../UI/icons/Mongodb';
import Mysql from '../UI/icons/Mysql';
import Nodejs from '../UI/icons/NodeJs';
import Php from '../UI/icons/Php';
import React from '../UI/icons/React';
import Sass from '../UI/icons/Sass';
import Typescript from '../UI/icons/Typescript';

import st from './skills.module.css';

export default function Skills() {
  return (
    <div className={st.container}>
      <h2 className="f-regular titles-f-size">Skills</h2>
      <p>
        These are some of the technologies and tools that I have mostly used in
        my career. Featured with a ⭐️, are the ones I am more comfortable with
        and I would like to continue using them.
      </p>
      <div className={st['icons-container']}>
        <Css />
        <Git />
        <Html />
        <Javascript />
        <Mongodb />
        <Mysql />
        <Nodejs />
        <Php />
        <React />
        <Sass />
        <Typescript />
      </div>
    </div>
  );
}
