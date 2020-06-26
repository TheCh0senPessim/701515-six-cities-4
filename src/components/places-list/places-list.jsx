import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {offers, onCardTitleClick} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard offer={offer} key={offer.title} onCardTitleClick={onCardTitleClick}/>
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
