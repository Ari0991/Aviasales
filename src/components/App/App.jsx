import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import Content from '../Content/Content.jsx';
import { store } from '../../redux_components/store/store.jsx';
import { getId, getTicketsData } from '../../redux_components/actions/actions.jsx';

const App = ({ error, ID }) => {
  useEffect(() => {
    if (!ID) {
      store.dispatch(getId());
    }
  }, []);

  useEffect(() => {
    if (ID) {
      store.dispatch(getTicketsData(ID));
    }
  }, [ID]);

  const isError = error ? (
    <Alert message="Warning! Something is wrong. " type="error" showIcon closable />
  ) : (
    <Content />
  );
  const isOnline = window.navigator.onLine ? (
    <React.Fragment>{isError}</React.Fragment>
  ) : (
    <Alert message="Network Error" description="Offline error. Failed to load application" type="error" />
  );

  return <React.Fragment>{isOnline}</React.Fragment>;
};

const mapStateToProps = (state) => {
  const { listReducer } = state;
  return {
    ID: listReducer.ID,
    error: listReducer.error,
    loading: listReducer.loading,
  };
};

export default connect(mapStateToProps)(App);
