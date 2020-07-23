import {reducer, ActionType} from './reducer.js';

describe(`Reducer tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: `Amsterdam`,
      offersList: [],
    });
  });

  it(`Reducer should return offersList`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersList: [`offer1`, `offer2`, `offer3`],
    }, {
      type: ActionType.GET_OFFERS_LIST,
    })).toEqual([`offer1`, `offer2`, `offer3`]);
  });

  it(`Reducer should change city name to a new value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offersList: [],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Hamburg`,
    })).toEqual({
      city: `Hamburg`,
      offersList: [],
    });
  });

});
