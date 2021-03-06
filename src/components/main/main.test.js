import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
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

it(`Should Main render correctly`, () => {
  createMapContainer();
  const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            offersAmount={Settings.OFFERS_AMOUNT} offers={testOffers} onCardTitleClick={() => {}}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
