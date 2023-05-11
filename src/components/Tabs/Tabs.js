import React from 'react';

import classes from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={classes['tickets__tabs']}>
      <button className={classes['tickets__tabs-item']}>Самый дешевый</button>
      <button className={classes['tickets__tabs-item']}>Самый быстрый</button>
      <button className={classes['tickets__tabs-item']}>Оптимальный</button>
    </div>
  );
};

export default Tabs;
