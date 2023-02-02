import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../../redux/configureStore';
import MissionRow from '../MissionRow';

describe('Test for MissionRow component', () => {
  const testData = {
    mission_id: '1',
    mission_name: 'testing name',
    description: 'testing description',
    status: false,
  };

  it('renders Mission name without any error ', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <MissionRow mission={testData} />
          </tbody>
        </table>
      </Provider>,
    );
    expect(screen.getByText('testing name')).toBeInTheDocument();
    expect(screen.getByText('testing description')).toBeInTheDocument();
  });
});
