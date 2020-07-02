import React from 'react';
import PropTypes from 'prop-types';

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onMouseEnter(this.props.offer.id);
  }

  render() {
    const {title, type, price, rating, img, isPremium} = this.props.offer;
    return (
      <article className="cities__place-card place-card" onMouseEnter={this.handleChange}>
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#" onClick={this.props.onCardTitleClick}>{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onCardTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

export default PlaceCard;
