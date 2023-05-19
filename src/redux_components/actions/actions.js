import { store } from '../store/store.js';
import AviaService from '../../services/avia-service.js';

const aviaService = new AviaService();

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
  return (dispatch) => {
    aviaService
      .getSearchId()
      .then((res) => {
        dispatch(rememberId(res.searchId));
      })
      .catch(() => store.dispatch(error));
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

export function getTicketsData(id) {
  return (dispatch) => {
    aviaService
      .getTickets(id)
      .then((res) => {
        dispatch(getTickets(res));
      })
      .catch(() => store.dispatch(error));
  };
}

export function getTickets(tickets) {
  return { type: 'GET_TICKETS', tickets: tickets.tickets };
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
