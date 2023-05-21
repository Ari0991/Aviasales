import React from 'react';

import classes from './Filter-item.module.scss';

const FilterItem = ({ name, label, checked, onChangeFilter }) => {
  return (
    <label className={classes['filter__item']}>
      <input
        className={classes['filter__item-checkbox']}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChangeFilter}
      />
      <span className={classes['filter__item-text']}>{label}</span>
    </label>
  );
};

export default FilterItem;
