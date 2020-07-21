import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import {testOffers} from '../../mocks/test-mocks.js';

const createMapContainer = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

it(`Map is rendered correctly`, () => {
  createMapContainer();
  const tree = renderer
    .create(
        <Map
          offers={testOffers}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
