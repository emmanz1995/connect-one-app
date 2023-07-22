import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // For custom jest matchers
// import userEvent from '@testing-library/user-event'; // To simulate user interactions
import Card from './Card';

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
    const { getByText } = render(<Card journal={journals} />);
    const titleElement = getByText('Mum2');
    const descElement = getByText('I want Mum to have a bacon cheese sandwich!');
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  // it('should open up modal', async () => {});
  // it('should toggle if prayer is completed or not via button click', async () => {});
  // it('should delete a journal entry', async () => {});
});