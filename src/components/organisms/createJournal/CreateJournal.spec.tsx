import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateJournal from './CreateJournal';

// I have officially learnt have to use RTL
// to effectively test a button click event
// in a react component. I'm going to the moon 🚀

// I have chat-GPT to thank for this

describe('test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const handleCreateJournal = jest.fn()
  it('should render createJournal component', () => {
    const { getByText, getByLabelText } = render(<CreateJournal onAddJournal={handleCreateJournal}  message='' />);
    //TODO: I have to figure out why this is complaining 😊
    expect(getByText('Create new journal')).toBeInTheDocument;
    expect(getByLabelText('Title')).toBeInTheDocument;
  })
  test('updates input fields correctly', async () => {
    const { getByLabelText } = render(<CreateJournal onAddJournal={handleCreateJournal}  message=''/>);

    // Get the input fields
    const titleInput = getByLabelText('Title') as HTMLInputElement;
    const descriptionInput = getByLabelText('Description') as HTMLInputElement;

    // Type values in the input fields
    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

    // Check if the input fields' values are updated
    expect(titleInput.value).toBe('Test title');
    expect(descriptionInput.value).toBe('Test description');
  });

  test('calls onAddJournal with the correct values when submitted', async () => {
    const { getByLabelText, getByText } = render(<CreateJournal onAddJournal={handleCreateJournal}  message='' />);

    // Get the input fields and submit button
    const titleInput = getByLabelText('Title') as HTMLInputElement;
    const descriptionInput = getByLabelText('Description') as HTMLInputElement;
    const submitButton = getByText('Submit');

    // Type values in the input fields
    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Wait for the async event (onAddJournal) to resolve
    await waitFor(() => expect(handleCreateJournal).toHaveBeenCalledTimes(1));

    // Check if onAddJournal was called with the correct values
    expect(handleCreateJournal).toHaveBeenCalledWith({
      title: 'Test title',
      description: 'Test description',
    });
  });
})