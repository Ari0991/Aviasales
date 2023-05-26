import { sortTickets } from '../../utilities/utilities.jsx';

const initialStateList = {
  error: false,
  loading: true,
  ID: null,
  stop: false,
  tickets: [],
  viewTickets: 5,
};

const initialStateSort = {
  sort: 'lowPrice',
  filter: [],
  allChecked: false,
};

export const listReducer = (state = initialStateList, action) => {
  const { viewTickets } = state;
  switch (action.type) {
    case 'LOAD_STOP':
      return { ...state, loading: false };
    case 'ERROR':
      return { ...state, error: true };
    case 'REMEMBER_ID':
      const { id } = action;
      return { ...state, ID: id };
    case 'GET_TICKETS':
      const { tickets } = action;
      const result = sortTickets([...tickets], initialStateSort.sort);
      return {
        ...state,
        tickets: result,
        loading: false,
      };
    case 'GET_MORE_TICKETS':
      const newViewTickets = structuredClone(viewTickets) + 5;
      return { ...state, viewTickets: newViewTickets };
    case 'SET_STOP':
      return { ...state, stop: true };
    default:
      return state;
  }
};

export const sortReducer = (state = initialStateSort, action) => {
  const { filter, allChecked } = state;
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
      return { ...state, filter: newFilter };
    case 'FILTER_ALL_CHECKED':
      if (!allChecked && filter.length <= 3) {
        return {
          ...state,
          filter: ['0-transfers', '1-transfers', '2-transfers', '3-transfers'],
          allChecked: true,
        };
      } else {
        return { ...state, filter: [], allChecked: false };
      }
    case 'SORT_CHANGE':
      return { ...state, sort: action.name };

    default:
      return state;
  }
};
