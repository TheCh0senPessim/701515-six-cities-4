import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';


it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceCard />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
