import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../../api/journal';
import _ from 'lodash';

function Journal() {
  const [journal, setJournal]: object = useState({});
  const getJournal = async (id: string | undefined) => {
    const journalDetails = await api.getSingleJournal(id);
    setJournal(journalDetails)
    return journalDetails;
  }
  const { id } = useParams();
  console.log(id)

  console.log(journal)

  useEffect(() => {
    getJournal(id)
  }, [])

  return (
    <div>
      <h1>Journal</h1>
      <div>
        <h1>{journal?.title}</h1>
        <section>
          <h4>{journal?.output?.reference}</h4>
          {_.map(journal?.output?.verses, verse => (
            <div>
              <p>{verse?.text}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Journal;