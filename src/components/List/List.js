import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '../Card/Card.js';

import classes from './List.module.scss';

const List = ({ tickets, viewTickets, filter, sort }) => {
  useEffect(() => {
    console.log(filter, sort);
  }, [filter, sort]);
  const slicedTickets = [...tickets].slice(0, viewTickets);

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

  return <ul className={classes['tickets__list']}>{items}</ul>;
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    viewTickets: state.viewTickets,
    sort: state.sort,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(List);
