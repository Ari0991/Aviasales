import { sortTickets, checkActiveFilteres } from '../../utilities/utilities.js';
// import { store } from '../../redux_components/store/store.js';

const initialState = {
  loading: true,
  sort: 'lowPrice',
  filter: [],
  allChecked: false,
  error: false,
  ID: null,
  tickets: [],
  viewTickets: 5,
  stop: false,
};

export const reducer = (state = initialState, action) => {
  const { filter, allChecked, viewTickets, sort } = state;
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
        return { ...state, filter: ['0-transfers', '1-transfers', '2-transfers', '3-transfers'], allChecked: true };
      } else {
        return { ...state, filter: [], allChecked: false };
      }
    case 'LOAD_STOP':
      return { ...state, loading: false };

    case 'ERROR':
      return { ...state, error: true };
    case 'REMEMBER_ID':
      const { id } = action;
      return { ...state, ID: id };
    case 'GET_TICKETS':
      const { tickets } = action;
      const result = sortTickets([...tickets], sort);
      return {
        ...state,
        tickets: result,
        loading: false,
      };

    case 'GET_MORE_TICKETS':
      const newViewTickets = structuredClone(viewTickets) + 5;
      return { ...state, viewTickets: newViewTickets };

    case 'SORT_CHANGE':
      return { ...state, sort: action.name };

    // case 'STOP_FETCH':
    //   return { ...state, stop: true };

    default:
      return state;
  }
};
