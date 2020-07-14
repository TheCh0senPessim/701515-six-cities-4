import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  id: `01`,
  isPremium: true,
  title: `Beautiful & luxurious studio at great location`,
  features: {
    type: `Apartment`,
    bedrooms: 3,
    maxGuests: 4,
  },
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
  price: 120,
  rating: 96,
  photos: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  householdList: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`],
  host: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true
  }
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
