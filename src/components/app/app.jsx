import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const cardTitleHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {offersAmount, offers} = props;

  return (
    <Main offersAmount={offersAmount} offers={offers} onCardTitleClick={cardTitleHandler} />
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
