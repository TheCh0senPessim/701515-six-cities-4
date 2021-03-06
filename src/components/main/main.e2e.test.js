import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {testOffers} from '../../mocks/test-mocks.js';
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter()
});

const createMapContainer = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

describe(`MainComponent`, () => {
  it(`Should card title be clicked`, () => {
    const onCardTitleClick = jest.fn();
    createMapContainer();
    const main = mount(
        <BrowserRouter>
          <Main
            offersAmount={312}
            offers={testOffers}
            onCardTitleClick={onCardTitleClick}
          />
        </BrowserRouter>
    );

    const cardTitle = main.find(`.place-card__name a`);

    cardTitle.forEach((node) => {
      node.simulate(`click`);
    });

    expect(onCardTitleClick).toHaveBeenCalledTimes(cardTitle.length);
  });
});
