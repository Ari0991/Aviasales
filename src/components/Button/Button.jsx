import React from 'react';
import { connect } from 'react-redux';

import { getMoreTickets } from '../../redux_components/actions/actions.jsx';

import classes from './Button.module.scss';

const Button = ({ getMoreTickets }) => {
  return (
    <button className={classes['button--show-more']} onClick={getMoreTickets}>
      Показать еще 5 билетов!
    </button>
  );
};

const mapStateToProps = (state) => {
  return { tickets: state.tickets, viewTickets: state.viewTickets };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreTickets: () => dispatch(getMoreTickets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
