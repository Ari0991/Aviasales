import React from 'react';

import Card from '../Card/Card.js';

import classes from './List.module.scss';

const List = () => {
  return (
    <ul className={classes['tickets__list']}>
      <Card />
    </ul>
  );
};

export default List;
