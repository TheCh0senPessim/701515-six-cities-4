import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';

const cardTitleHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {offersAmount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersAmount={offersAmount} offers={offers} onCardTitleClick={cardTitleHandler} />
        </Route>
        <Route exact path="/dev-detailed-offer">
          <DetailedOffer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
