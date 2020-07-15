import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import {testOffers} from '../../mocks/test-mocks.js';
import {BrowserRouter} from "react-router-dom";

it(`PlacesList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesList
            onCardTitleClick={() => {}}
            offers={testOffers}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
