import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For custom jest matchers
import Card from './Card';

// jest.mock('react-router-dom', () => ({
//   Link: jest.fn(({ to, children }) => <Link to={to}>{children}</Link>),
// }));

describe('test', () => {
  interface IJournal {
    title: string;
    description: string;
    completedAt: boolean;
    createdAt: string;
    updatedAt: string;
    id: string;
  }
  const journals: IJournal = {
    title: "Mum2",
    description: "I want Mum to have a bacon cheese sandwich!",
    completedAt: false,
    createdAt: "2023-04-17T21:23:15.901Z",
    updatedAt: "2023-04-18T19:37:19.642Z",
    id: "643db8c388f22f9d7395a0f5"
  }
  it('should display card journal', async () => {
    const { getByText } = render(
      <Card journal={journals} onDeleteJournal={jest.fn()}/>
    );
    const titleElement = getByText('Mum2');
    const descElement = getByText('I want Mum to have a bacon cheese sandwich!');
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  it('should delete a journal entry', async () => {
    const handleDelete = jest.fn();
    const { getByTestId } = render(
      <Card journal={journals} onDeleteJournal={handleDelete}/>
    );

    const deleteJournalBtn = getByTestId('del-icon');

    fireEvent.click(deleteJournalBtn);

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith('643db8c388f22f9d7395a0f5');
  });

  // it('should open up modal', async () => {});
  // it('should toggle if prayer is completed or not via button click', async () => {});
});