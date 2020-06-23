import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersAmount={Settings.OFFERS_AMOUNT} offers={offers} onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
