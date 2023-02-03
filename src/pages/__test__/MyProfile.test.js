import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from '../MyProfile';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

describe('Testing Mission component ', () => {
  test('renders Mission header correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
