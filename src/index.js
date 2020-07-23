import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  OFFERS_AMOUNT: 312
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App offersAmount={Settings.OFFERS_AMOUNT} offers={offers} />
    </Provider>,
    document.querySelector(`#root`)
);
