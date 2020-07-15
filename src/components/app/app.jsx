import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DetailedOffer from '../detailed-offer/detailed-offer.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offerToShow: this.props.offers[0]
    };
    this.cardTitleHandler = this.cardTitleHandler.bind(this);
  }

  cardTitleHandler(selectedOffer) {
    this.setState({offerToShow: selectedOffer});
  }

  render() {
    const {offersAmount, offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Main offersAmount={offersAmount} offers={offers} onCardTitleClick={this.cardTitleHandler} />
          </Route>
          <Route exact path="/dev-detailed-offer">
            <DetailedOffer offer={offers[0]}/>
          </Route>
          <Route exact path="/detailed-offer">
            <DetailedOffer offer={this.state.offerToShow} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
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
  ).isRequired
};

export default App;
