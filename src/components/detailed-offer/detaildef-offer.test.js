import React from 'react';
import renderer from 'react-test-renderer';
import DetailedOffer from './detailed-offer.jsx';
import {testOffer} from '../../mocks/test-mocks.js';

it(`Should DetailedOffer render correctly`, () => {
  const tree = renderer
    .create(<DetailedOffer offer={testOffer} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
