import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';

import Card from '../Card/Card.jsx';
import { sortTickets, checkActiveFilteres, getVisibleTickets } from '../../utilities/utilities.jsx';

import classes from './List.module.scss';

const List = ({ tickets, viewTickets, sort, filter, stop }) => {
  let sortedList = sortTickets([...tickets], sort);
  let filteredList = checkActiveFilteres(sortedList, filter);

  const visibleTickets = useMemo(() => getVisibleTickets(filteredList, viewTickets));

  const items = visibleTickets.map((elem) => {
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

  const isStopLoading = stop ? null : (
    <Spin>
      <div className={classes['tickets__alert']}>База еще загружается, но вы можете пользоваться фильтрами</div>
    </Spin>
  );

  const hasTickets =
    visibleTickets.length === 0 ? (
      <Alert message="По вашему запросу не найдено билетов. " description="Пожалуйста, поставьте галочку" type="info" />
    ) : (
      items
    );

  return (
    <ul className={classes['tickets__list']}>
      {isStopLoading}
      {hasTickets}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.ticketList.tickets,
    viewTickets: state.ticketList.viewTickets,
    stop: state.ticketList.stop,
    sort: state.ticketSort.sort,
    filter: state.ticketSort.filter,
  };
};

List.defaultProps = {
  tickets: [],
  viewTickets: 5,
  sort: 'lowPrice',
  filter: [],
  stop: false,
};

List.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  viewTickets: PropTypes.number,
  sort: PropTypes.string,
  filter: PropTypes.arrayOf(PropTypes.string),
  stop: PropTypes.bool,
};

export default connect(mapStateToProps)(List);
