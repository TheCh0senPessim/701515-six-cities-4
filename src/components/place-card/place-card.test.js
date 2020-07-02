import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  id: 25,
  isPremium: true,
  title: `A place where you could be safe`,
  img: `img/apartment-01.jpg`,
  price: 150,
  rating: 99,
  type: `bunker`
};


it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onCardTitleClick={() => {}}
      onMouseEnter={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
