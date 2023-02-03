import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../NavBar';
import store from '../../../redux/configureStore';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Space Travelers Hub')).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});
