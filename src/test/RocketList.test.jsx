import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketList from '../components/Rockets/RocketList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('RocketList Component', () => {
  let tree;

  beforeEach(() => {
    const rocketList = [{
      id: 1,
      rocketName: 'Halcon 1',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      flickrImages: [{ imgId: 0, imgSrc: 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg' }],
      isReserved: false,
    }];

    useSelector.mockImplementation(() => rocketList);

    tree = render(<RocketList />);
  });

  test('should render correctly', () => expect(tree).toMatchSnapshot());
});
