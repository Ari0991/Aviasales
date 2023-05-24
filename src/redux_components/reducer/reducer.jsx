import { sortTickets } from '../../utilities/utilities.jsx';

const initialState = {
  ticketList: {
    error: false,
    loading: true,
    ID: null,
    stop: false,
    tickets: [],
    viewTickets: 5,
  },
  ticketSort: {
    sort: 'lowPrice',
    filter: [],
    allChecked: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_STOP':
    case 'ERROR':
    case 'REMEMBER_ID':
    case 'GET_TICKETS':
    case 'GET_MORE_TICKETS':
    case 'SET_STOP':
      return {
        ...state,
        ticketList: updateTicketList(state, action),
      };

    case 'FILTER_CHANGE':
    case 'FILTER_ALL_CHECKED':
    case 'SORT_CHANGE':
      return {
        ...state,
        ticketSort: updateTicketSort(state, action),
      };

    default:
      return state;
  }
};

const updateTicketList = (state, action) => {
  const { ticketList } = state;
  const { viewTickets } = ticketList;
  const { sort } = state.ticketSort;
  switch (action.type) {
    case 'LOAD_STOP':
      return { ...ticketList, loading: false };
    case 'ERROR':
      return { ...ticketList, error: true };
    case 'REMEMBER_ID':
      const { id } = action;
      return { ...ticketList, ID: id };
    case 'GET_TICKETS':
      const { tickets } = action;
      const result = sortTickets([...tickets], sort);
      return {
        ...ticketList,
        tickets: result,
        loading: false,
      };
    case 'GET_MORE_TICKETS':
      const newViewTickets = structuredClone(viewTickets) + 5;
      return { ...ticketList, viewTickets: newViewTickets };
    case 'SET_STOP':
      return { ...ticketList, stop: true };
    default:
      return ticketList;
  }
};

const updateTicketSort = (state, action) => {
  const { ticketSort } = state;
  const { filter, allChecked } = ticketSort;
  switch (action.type) {
    case 'FILTER_CHANGE':
      const name = action.name;
      let newFilter = structuredClone(filter);
      if (newFilter.includes(name)) {
        const index = newFilter.findIndex((elem) => elem === name);
        newFilter.splice(index, 1);
      } else {
        newFilter.push(name);
      }
      return { ...ticketSort, filter: newFilter };
    case 'FILTER_ALL_CHECKED':
      if (!allChecked && filter.length <= 3) {
        return {
          ...ticketSort,
          filter: ['0-transfers', '1-transfers', '2-transfers', '3-transfers'],
          allChecked: true,
        };
      } else {
        return { ...ticketSort, filter: [], allChecked: false };
      }
    case 'SORT_CHANGE':
      return { ...ticketSort, sort: action.name };

    default:
      return ticketSort;
  }
};
