import axios from 'axios';

const getJournal = async () => {}

const getMyJournals = async () => {}

const getSingleJournal = async (id: string | undefined) => {}

const onCreateJournal = async(formData: { title: string, description: string }) => {}

const onDeleteJournal = async (id: string) => {
  try {
    const { data } = await axios({
      url: `${import.meta.env.VITE_API_URL}/api/journal/${id}`,
      method: 'DELETE'
    })
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export {
  getJournal,
  getSingleJournal,
  onCreateJournal,
  onDeleteJournal
}