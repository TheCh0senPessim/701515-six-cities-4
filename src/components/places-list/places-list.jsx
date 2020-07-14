import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeCard: ``};
    this.handleChangeActiveCard = this.handleChangeActiveCard.bind(this);
  }

  handleChangeActiveCard(id) {
    this.setState({activeCard: id});
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.offers.map((offer, i) => (
          <PlaceCard
            id={offer.id}
            offer={offer}
            key={offer.title + i}
            onCardTitleClick={this.props.onCardTitleClick}
            onMouseEnter={this.handleChangeActiveCard}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  onCardTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        features: PropTypes.shape({
          type: PropTypes.string.isRequired,
          bedrooms: PropTypes.number.isRequired,
          maxGuests: PropTypes.number.isRequired
        }).isRequired,
        description: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        photos: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        householdList: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,

};

export default PlacesList;
