import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import {BrowserRouter} from "react-router-dom";
import {testOffer} from '../../mocks/test-mocks';

Enzyme.configure({
  adapter: new Adapter()
});

const onCardTitleClick = jest.fn();
const onMouseEnter = jest.fn();

describe(`PlaceCard component`, () => {
  it(`Should title click be passed`, () => {
    const placeCard = mount(
        <BrowserRouter>
          <PlaceCard
            offer={testOffer}
            onCardTitleClick={onCardTitleClick}
            onMouseEnter={onMouseEnter}
          />
        </BrowserRouter>
    );

    const title = placeCard.find(`.place-card__name`).first();
    title.simulate(`click`);

    expect(onCardTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should hover handler receive info about offer`, () => {
    const placeCard = mount(
        <BrowserRouter>
          <PlaceCard
            key={testOffer.id}
            offer={testOffer}
            onCardTitleClick={onCardTitleClick}
            onMouseEnter={onMouseEnter}
          />
        </BrowserRouter>
    );

    const card = placeCard.find(PlaceCard);
    card.simulate(`mouseEnter`);
    expect(card.prop(`offer`)).toEqual(testOffer);
  });
});
