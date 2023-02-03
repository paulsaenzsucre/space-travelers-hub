import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../pages/Rockets';

describe('Rockets', () => {
  test('renders Rockets Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });
});
