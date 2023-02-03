/* eslint-disable */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rocket from '../components/Rockets/Rocket';

describe('Rocket', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 1,
      rocketName: 'Halcon 1',
      description: 'A three-stage-to-orbit medium lift launch vehicle',
      flickrImages: [{imgId: 0, imgSrc: 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg'}],
      isReserved: false,
      handleClick: jest.fn(),
    };
  });

  test('Render correctly with all props', () => {
    const tree = render(<Rocket {...props} />);
    expect(tree).toMatchSnapshot();
  });

  test('Render the correct rocket name', () => {
    render(<Rocket {...props} />);
    const element = screen.getByText('Halcon 1');
    expect(element).toBeInTheDocument();
  });

  test('should render the correct button text when reserved is false', () => {
    render(<Rocket {...props} />);
    const element = screen.getByText('Reserve Rocket');
    expect(element).toBeInTheDocument();
  });

  test('should render the correct button text when reserved is true', () => {
    props.isReserved = true;
    render(<Rocket {...props} />);

    const element = screen.getByText('Cancel Reservation');
    expect(element).toBeInTheDocument();
  });

  test('should call handleRocket when button is clicked', () => {
    render(<Rocket {...props} />);
    const element = screen.getByText('Reserve Rocket');
    fireEvent.click(element);
    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
  
});
