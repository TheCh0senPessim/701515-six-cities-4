import React from 'react';
import renderer from 'react-test-renderer';
import DetailedOffer from './detailed-offer.jsx';

it(`Should DetailedOffer render correctly`, () => {
  const tree = renderer
    .create(<DetailedOffer />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

