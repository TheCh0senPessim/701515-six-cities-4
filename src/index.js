import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  OFFERS_AMOUNT: 312
};

// const offers = [
//   {title: `Beautiful & luxurious apartment at great location`},
//   {title: `Wood and stone place`},
//   {title: `Canal View Prinsengracht`},
//   {title: `Nice, cozy, warm big bed apartment`},
//   {title: `Wood and stone place`}
// ];

ReactDOM.render(
    <App offersAmount={Settings.OFFERS_AMOUNT} offers={offers} />,
    document.querySelector(`#root`)
);
