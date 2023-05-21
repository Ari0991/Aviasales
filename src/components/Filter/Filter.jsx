import React from 'react';
import { connect } from 'react-redux';

import { checkItem, isAllChecked } from '../../redux_components/actions/actions.jsx';
import FilterItem from '../Filter-item/Filter-item.jsx';
// import { store } from '../../redux_components/store/store.js';

import classes from './Filter.module.scss';

const Filter = ({ filter, check, checkAll }) => {
  const filterChange = (evt) => {
    if (evt.target.name === 'all-transfers') {
      checkAll();
    } else {
      check(evt.target.name);
    }
  };

  const filterData = [
    { name: 'all-transfers', label: 'Все' },
    { name: '0-transfers', label: 'Без пересадок' },
    { name: '1-transfers', label: '1 пересадка' },

    { name: '2-transfers', label: '2 пересадки' },
    { name: '3-transfers', label: '3 пересадки' },
  ];

  const onToggleFilter = (name) => {
    if (name === 'all-transfers') {
      if (filter.length > 3) {
        return true;
      } else {
        return false;
      }
    } else {
      const result = filter.includes(name) ? true : false;
      return result;
    }
  };

  const isChecked = (name) => {
    const result = onToggleFilter(name);
    return result;
  };

  const filterItems = filterData.map((elem) => {
    const { name, label } = elem;
    return <FilterItem key={name} name={name} label={label} checked={isChecked(name)} onChangeFilter={filterChange} />;
  });

  return (
    <div className={classes['filter']}>
      <h4 className={classes['filter__title']}>Количество пересадок</h4>
      {filterItems}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter, isAllItemsChecked: state.allChecked };
};

const mapDispatchToProps = (dispatch) => {
  return {
    check: (name) => dispatch(checkItem(name)),
    checkAll: () => dispatch(isAllChecked()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
