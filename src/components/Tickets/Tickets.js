import React from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';

// import { store } from '../../redux_components/store/store.js';
import Tabs from '../Tabs/Tabs.js';
import List from '../List/List.js';
import Button from '../Button/Button.js';

import classes from './Tickets.module.scss';

const Tickets = ({ loading, noTickets }) => {
  const isLoading = loading ? (
    <Spin tip="Loading...">
      <Alert message="Loading tickets" description="Please, wait" type="info" />
    </Spin>
  ) : (
    <List />
  );

  const hasTickets = noTickets ? (
    <Alert
      message="По вашему запросу не найдено билетов. "
      description="Пожалуйста, выберите фильтр или поставьте галочку"
      type="info"
    />
  ) : null;

  return (
    <div className={classes['tickets']}>
      <Tabs />
      {isLoading}
      {hasTickets}
      <Button />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    noTickets: state.noTickets,
  };
};

export default connect(mapStateToProps)(Tickets);
