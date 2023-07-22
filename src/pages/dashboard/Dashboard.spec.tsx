import { create } from 'react-test-renderer';
import Dashboard from './Dashboard';

// Mock the dependencies used in the Dashboard component
jest.mock('../../api/journal', () => ({
  getJournal: jest.fn().mockResolvedValue([]), // Return an empty array for simplicity
  onCreateJournal: jest.fn().mockResolvedValue({ id: 'mocked_id', title: 'Mocked Journal', description: 'Mocked Description' }),
}));

// Snapshot test for the Dashboard component
describe('Dashboard component', () => {
  it('renders correctly', () => {
    const tree = create(<Dashboard />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});