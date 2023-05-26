import React from 'react';
import PropTypes from 'prop-types';
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
  const { listReducer, sortReducer } = state;
  return {
    loading: listReducer.loading,
    sort: sortReducer.sort,
    filter: sortReducer.filter,
  };
};

Tickets.defaultProps = {
  loading: true,
  sort: 'lowPrice',
  filter: [],
};

Tickets.propTypes = {
  loading: PropTypes.bool,
  sort: PropTypes.string,
  filter: PropTypes.array,
};

export default connect(mapStateToProps)(Tickets);
