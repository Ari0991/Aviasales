import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import Content from '../Content/Content.js';
import { store } from '../../redux_components/store/store.js';
import { getId, getTicketsData } from '../../redux_components/actions/actions.js';

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
  return {
    ID: state.ID,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
