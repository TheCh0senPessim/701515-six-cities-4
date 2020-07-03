import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

const offer = {
  id: 3,
  isPremium: true,
  title: `4 rooms`,
  img: `img/apartment-01.jpg`,
  price: 200,
  rating: 95,
  type: `bunker`
};

Enzyme.configure({
  adapter: new Adapter()
});

const onCardTitleClick = jest.fn();
const onMouseEnter = jest.fn();

describe(`PlaceCard component`, () => {
  it(`Should title click be passed`, () => {
    const placeCard = mount(
        <PlaceCard
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onMouseEnter={onMouseEnter}
        />
    );

    const title = placeCard.find(`.place-card__name a`).first();
    title.props().onClick();

    expect(onCardTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should hover handler receive info about offer`, () => {
    const placeCard = mount(
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onMouseEnter={onMouseEnter}
        />
    );

    const card = placeCard.find(PlaceCard);
    card.simulate(`mouseEnter`);
    expect(card.prop(`offer`)).toEqual(offer);
  });
});
