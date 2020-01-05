import React from 'react';

import style from './index.module.scss';
import Search from '../search';

export default () => {
  
  return (
    <header className={style.header}>
      <div className={style.search}>
        <Search />
      </div>
    </header>
  )
}