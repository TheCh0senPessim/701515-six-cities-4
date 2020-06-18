import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  OFFERS_AMOUNT: 312
};

ReactDOM.render(
    <App offersAmount={Settings.OFFERS_AMOUNT} />,
    document.querySelector(`#root`)
);
