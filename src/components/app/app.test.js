import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const Settings = {
  OFFERS_AMOUNT: 312
};

const offers = [
  {
    id: 10,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 20,
    rating: 11,
    img: `img/apartment-01.jpg`
  }, {
    id: 20,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 30,
    rating: 22,
    img: `img/apartment-01.jpg`
  }, {
    id: 30,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 40,
    rating: 33,
    img: `img/apartment-01.jpg`
  }, {
    id: 40,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 50,
    rating: 55,
    img: `img/apartment-01.jpg`
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersAmount={Settings.OFFERS_AMOUNT} offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
