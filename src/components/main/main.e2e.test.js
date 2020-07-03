import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const offers = [
  {
    id: 10,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 20,
    rating: 11,
    img: `img/apartment-01.jpg`
  }, {
    id: 20,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 30,
    rating: 22,
    img: `img/apartment-01.jpg`
  }, {
    id: 30,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 40,
    rating: 33,
    img: `img/apartment-01.jpg`
  }, {
    id: 40,
    isPremium: true,
    title: `Tower in a castle`,
    type: `Castle`,
    price: 50,
    rating: 55,
    img: `img/apartment-01.jpg`
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

describe(`MainComponent`, () => {
  it(`Should card title be clicked`, () => {
    const onCardTitleClick = jest.fn();

    const main = mount(
        <Main
          offersAmount={312}
          offers={offers}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const cardTitle = main.find(`.place-card__name a`);

    cardTitle.forEach((node) => {
      node.simulate(`click`);
    });

    expect(onCardTitleClick).toHaveBeenCalledTimes(cardTitle.length);
  });
});
