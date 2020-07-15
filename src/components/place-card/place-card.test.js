import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import {BrowserRouter} from 'react-router-dom';
import {testOffer} from '../../mocks/test-mocks.js';


it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            offer={testOffer}
            onCardTitleClick={() => {}}
            onMouseEnter={() => {}}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
