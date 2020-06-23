import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const Settings = {
  OFFERS_AMOUNT: 312
};

const offers = [
  {title: `Beautiful & luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`},
  {title: `Wood and stone place`}
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersAmount={Settings.OFFERS_AMOUNT} offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
