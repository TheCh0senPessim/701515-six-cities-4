import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  OFFERS_AMOUNT: 312
};

ReactDOM.render(
    <App offersAmount={Settings.OFFERS_AMOUNT} offers={offers} />,
    document.querySelector(`#root`)
);
