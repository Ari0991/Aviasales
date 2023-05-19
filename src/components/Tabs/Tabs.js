import React from 'react';
import { connect } from 'react-redux';

import { sortChange } from '../../redux_components/actions/actions.js';

import classes from './Tabs.module.scss';

const Tabs = ({ sort, sortChange }) => {
  const isActive = (sortName) => {
    if (sort === sortName) {
      return classes['tickets__tabs-item--active'];
    } else {
      return classes['tickets__tabs-item'];
    }
  };

  const items = [
    { label: 'Самый дешевый', sort: 'lowPrice' },
    { label: 'Самый быстрый', sort: 'minDuration' },
    { label: 'Оптимальный', sort: 'optimal' },
  ];

  const tabs = items.map((elem, index) => {
    const { label, sort } = elem;
    return (
      <button key={`${elem}${index}`} className={isActive(sort)} onClick={() => sortChange(sort)}>
        {label}
      </button>
    );
  });
  return <div className={classes['tickets__tabs']}>{tabs}</div>;
};

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortChange: (name) => dispatch(sortChange(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
