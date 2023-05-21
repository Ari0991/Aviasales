import axios from 'axios';

import { store } from '../store/store.jsx';

export function checkItem(name) {
  return { type: 'FILTER_CHANGE', name: name };
}
export function isAllChecked() {
  return { type: 'FILTER_ALL_CHECKED' };
}

export function sort() {
  return { type: 'SORT' };
}

export function getId() {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://aviasales-test-api.kata.academy/search');
      const id = response.data.searchId;

      dispatch(rememberId(id));
    } catch (err) {
      store.dispatch(error());
    }
  };
}

export function rememberId(id) {
  return { type: 'REMEMBER_ID', id: id };
}

export function LoadStop() {
  return { type: 'LOAD_STOP' };
}
export function LoadPlay() {
  return { type: 'LOAD_STOP' };
}

export function error() {
  return { type: 'ERROR' };
}

let ticketList = [];
export function getTicketsData(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
      const { tickets, stop } = await response.data;
      ticketList.push(...tickets);
      if (!stop) {
        dispatch(getTicketsData(id));
      }
    } catch (error) {
      if (error.response.status === 500) {
        dispatch(getTicketsData(id));
      } else {
        dispatch(error());
      }
    }
    if (stop) {
      dispatch(getTickets(ticketList));
    }
  };
}

export function getTickets(tickets) {
  return { type: 'GET_TICKETS', tickets: tickets };
}

export function getFilteredTickets(transfers) {
  return { type: 'GET_TICKETS_BY_TRANSFER', transfers: transfers };
}

export function clearFilter() {
  return { type: 'FILTER_CLEAR' };
}

export function getMoreTickets() {
  return { type: 'GET_MORE_TICKETS' };
}

export function sortChange(name) {
  return { type: 'SORT_CHANGE', name: name };
}
