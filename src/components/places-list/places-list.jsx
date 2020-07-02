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
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
