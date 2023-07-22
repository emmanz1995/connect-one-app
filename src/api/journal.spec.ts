jest.mock('../helpers/journalConnector');

import * as api from './journal';
import journalConnectors from '../helpers/journalConnector';

describe('api calls works', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const mockJournal = (journalConnectors as unknown as jest.Mock);
  describe('getting all journals', () => {
    const journals = [
      {
        _id: "643db8efcbc42d4aa4bc8d5b",
        title: "Bacon Cheese",
        description: "I want a bacon cheese sandwich!",
        createdAt: "2023-04-17T21:23:59.982Z",
        updatedAt: "2023-04-17T21:23:59.982Z"
      },
      {
        _id: "643db8c388f22f9d7395a0f5",
        title: "Mum2",
        description: "I want Mum to have a bacon cheese sandwich!",
        createdAt: "2023-04-17T21:23:15.901Z",
        updatedAt: "2023-04-18T19:37:19.642Z"
      }
    ]
    it('should get back all the journals', async () => {
      mockJournal.mockResolvedValue(journals);

      const getAllJournal = await api.getJournal();

      expect(getAllJournal).toEqual(journals);
      expect(journalConnectors).toHaveBeenCalledTimes(1);
      expect(journalConnectors).toHaveBeenCalledWith({
        method: 'GET',
        url: 'http://localhost:3001/api/journal',
      });
    });

    it('should fail to get all journals', async () => {
      mockJournal.mockImplementationOnce(() => {
        throw new Error('Failed to get journals');
      })
      try {
        await api.getJournal();
      } catch(err: any) {
        expect(err.message).toEqual('Failed to get journals');
      }
    });
  })

  describe('creating a new journal', () => {
    it('should create a new journal', async() => {
      mockJournal.mockResolvedValue({
        _id: "642db7efcbc42g4rs4bc8d3b",
        title: "Healing",
        description: "I want a to be healed from illness!",
        createdAt: "2023-04-17T21:23:59.982Z",
        updatedAt: "2023-04-17T21:23:59.982Z"
      });
      const createJournalMock = await api.onCreateJournal({
        title: 'Healing',
        description: 'I want a to be healed from illness!'
      });
      expect(createJournalMock).toEqual({
        _id: "642db7efcbc42g4rs4bc8d3b",
        title: "Healing",
        description: "I want a to be healed from illness!",
        createdAt: "2023-04-17T21:23:59.982Z",
        updatedAt: "2023-04-17T21:23:59.982Z"
      });
      expect(journalConnectors).toHaveBeenCalledTimes(1);
      expect(journalConnectors).toHaveBeenCalledWith({
        body: {
          description: 'I want a to be healed from illness!',
          title: 'Healing'
        },
        headers: {
          contentType: 'application/json',
        },
        method: 'POST',
        url: 'http://localhost:3001/api/journal'
      });
    });
    it('should fail to create a new journal', async () => {
      mockJournal.mockImplementationOnce(() => {
        throw new Error("Couldn't create a new journal");
      });
      try {
        await api.onCreateJournal({title: '', description: ''})
      } catch(err: any) {
        expect(err.message).toEqual('Couldn\'t create a new journal');
      }
    });
  });
});