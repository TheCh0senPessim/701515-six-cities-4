import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {offersAmount, offers} = props;

  return (
    <Main offersAmount={offersAmount} offers={offers} />
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
