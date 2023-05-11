import React from 'react';

import Tabs from '../Tabs/Tabs.js';
import List from '../List/List.js';
import Button from '../Button/Button.js';

import classes from './Tickets.module.scss';

const Tickets = () => {
  return (
    <div className={classes['tickets']}>
      <Tabs />
      <List />
      <Button />
    </div>
  );
};

export default Tickets;
