import {extend} from './utils.js';

const initialState = {
  city: `Amsterdam`,
  offersList: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY :
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS_LIST :
      return state.offersList;

    default:
      return state;
  }
};

export {reducer, ActionType};
