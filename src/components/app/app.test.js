import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {testOffers} from '../../mocks/test-mocks.js';
import {BrowserRouter} from "react-router-dom";

const Settings = {
  OFFERS_AMOUNT: 312
};

const createMapContainer = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

it(`Render App`, () => {
  createMapContainer();
  const tree = renderer
    .create(
        <BrowserRouter>
          <App
            offersAmount={Settings.OFFERS_AMOUNT} offers={testOffers}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
