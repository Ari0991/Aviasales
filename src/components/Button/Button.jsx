import React from 'react';
import PropTypes from 'prop-types';
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
  return {
    tickets: state.ticketList.tickets,
    viewTickets: state.ticketList.viewTickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreTickets: () => dispatch(getMoreTickets()),
  };
};

Button.propTypes = {
  getMoreTickets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
