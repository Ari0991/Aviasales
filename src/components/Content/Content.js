import React from 'react';

import Filter from '../Filter/Filter.js';
import Tickets from '../Tickets/Tickets.js';

import classes from './Content.module.scss';

const Content = () => {
  return (
    <div className={classes['App']}>
      <div className={classes['app__logo']}></div>
      <div className={classes['app__wrapper']}>
        <Filter />
        <Tickets />
      </div>
    </div>
  );
};

export default Content;
