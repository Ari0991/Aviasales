import React from 'react';

import classes from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={classes['filter']}>
      <h4 className={classes['filter__title']}>Количество пересадок</h4>
      <label className={classes['filter__item']}>
        <input className={classes['filter__item-checkbox']} type="checkbox" />
        <span className={classes['filter__item-text']}>Все</span>
      </label>
      <label className={classes['filter__item']}>
        <input className={classes['filter__item-checkbox']} type="checkbox" />
        <span className={classes['filter__item-text']}>Без пересадок</span>
      </label>
      <label className={classes['filter__item']}>
        <input className={classes['filter__item-checkbox']} type="checkbox" />
        <span className={classes['filter__item-text']}>1 пересадка</span>
      </label>
      <label className={classes['filter__item']}>
        <input className={classes['filter__item-checkbox']} type="checkbox" />
        <span className={classes['filter__item-text']}>2 пересадки</span>
      </label>
      <label className={classes['filter__item']}>
        <input className={classes['filter__item-checkbox']} type="checkbox" />
        <span className={classes['filter__item-text']}>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
