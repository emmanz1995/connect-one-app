import journalConnectors from '../helpers/journalConnector';
import axios from 'axios';

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

const onDeleteJournal = async (id: string) =>
  await journalConnectors({
    url: `http://localhost:3001/api/journal/${id}`,
    method: 'DELETE'
  });

// const onDeleteJournal = async (id: string) => {
//   try {
//     const { data } = await axios({
//       url: `http://localhost:3001/api/journal/${id}`,
//       method: 'DELETE'
//     })
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

export {
  getJournal,
  onCreateJournal,
  onDeleteJournal
}