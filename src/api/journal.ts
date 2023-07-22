import journalConnectors from '../helpers/journalConnector';

const getJournal = async () =>
  await journalConnectors({
    url: 'http://localhost:3001/api/journal',
    method: 'GET',
  });

const onCreateJournal = async(formData: { title: string, description: string }) =>
  await journalConnectors({
    url: 'http://localhost:3001/api/journal',
    headers: {
      contentType: 'application/json'
    },
    method: 'POST',
    body: formData
  });

export { getJournal, onCreateJournal }