import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const offers = [
  {title: `Bad, grey & cold small bed apartment`}
];

Enzyme.configure({
  adapter: new Adapter()
});

describe(`MainComponent`, () => {
  it(`Should card title be clicked`, () => {
    const onCardTitleClick = jest.fn();
    const preventDefault = jest.fn();

    const main = mount(
        <Main
          offersAmount={312}
          offers={offers}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const cardTitle = main.find(`.place-card__name a`);

    cardTitle.simulate(`click`, {
      preventDefault
    });

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });
});
