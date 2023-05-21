import React from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';

import Tabs from '../Tabs/Tabs.jsx';
import List from '../List/List.jsx';
import Button from '../Button/Button.jsx';

import classes from './Tickets.module.scss';

const Tickets = ({ loading }) => {
  const isLoading = loading ? (
    <Spin tip="Loading...">
      <Alert message="Loading tickets" description="Please, wait" type="info" />
    </Spin>
  ) : (
    <List />
  );

  return (
    <div className={classes['tickets']}>
      <Tabs />
      {isLoading}
      <Button />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    sort: state.sort,
    filter: state.filter,
    stop: state.stop,
  };
};

export default connect(mapStateToProps)(Tickets);
