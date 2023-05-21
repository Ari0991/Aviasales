import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import Card from '../Card/Card.js';
import { sortTickets, checkActiveFilteres } from '../../utilities/utilities.js';

import classes from './List.module.scss';

const List = ({ tickets, viewTickets, sort, filter, allChecked }) => {
  let sortedList = sortTickets([...tickets], sort);
  let filteredList = checkActiveFilteres(sortedList, filter, allChecked);
  const slicedTickets = [...filteredList].slice(0, viewTickets);

  const items = slicedTickets.map((elem) => {
    const { carrier, price, segments } = elem;
    const departure = segments[0];
    const arrival = segments[1];

    return (
      <Card
        key={`${arrival.date}_${arrival.destination}_${arrival.duration}_${price}`}
        carrier={carrier}
        price={price}
        departure={departure}
        arrival={arrival}
      />
    );
  });

  const hasTickets =
    slicedTickets.length === 0 ? (
      <Alert
        message="По вашему запросу не найдено билетов. "
        description="Пожалуйста, выберите фильтр или поставьте галочку"
        type="info"
      />
    ) : (
      items
    );

  return <ul className={classes['tickets__list']}>{hasTickets}</ul>;
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    viewTickets: state.viewTickets,
    sort: state.sort,
    filter: state.filter,
    allChecked: state.allChecked,
  };
};

export default connect(mapStateToProps)(List);
