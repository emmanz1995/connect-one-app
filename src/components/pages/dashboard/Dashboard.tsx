// import { useEffect, useState } from 'react';
import './dashboard.scss';
// import * as api from '../../../api/journal';
// import { map } from 'lodash';
// import Card from '../../organisms/Card/Card';
// import CreateJournal from '../../organisms/createJournal/CreateJournal';
import Layout from '../../template/Layout/Layout';

// interface IJournal {
//   title: string;
//   description: string;
//   completedAt: boolean;
//   createdAt: string;
//   updatedAt: string;
//   id: string;
// }

function Dashboard() {
  // const [ journals, setJournals ] = useState<IJournal[]>([]);
  // const [ message, setMessage ] = useState<string>('');

  // useEffect(() => {
  //   let isMounted = true
  //
  //   async function fetchJournals() {
  //     try {
  //       const journalEntries: IJournal[] = await api.getJournal();
  //       if(isMounted) setJournals(journalEntries);
  //     } catch(err: any) {
  //       console.log(err)
  //     }
  //   }
  //   fetchJournals();
  //
  //   return () => {
  //     isMounted = false;
  //   }
  // }, []);

  // const handleAddJournal = async ({ title, description }) => {
  //   try {
  //     const newJournal = await api.onCreateJournal({
  //       title,
  //       description
  //     })
  //     setJournals([ ...journals, newJournal ]);
  //
  //     console.log('New Journal Created:', newJournal);
  //   } catch(err: unknown) {
  //     // const errorMsg = (err.response && err.response.data && (err as { response: { data: { errorMessage: string } } }).response?.data?.errorMessage) || (err as { data: string }).data || (err as string).toString();
  //     const errorMsg =
  //       (err.response &&
  //         err.response.data &&
  //         typeof err.response.data.errorMessage === 'string' &&
  //         err.response.data.errorMessage) ||
  //       (typeof err.data === 'string' && err.data) ||
  //       (typeof err === 'string' && err.toString()) ||
  //       'Unknown error';
  //
  //     setMessage(errorMsg);
  //     setTimeout(() => {
  //       setMessage(null)
  //     }, 5000)
  //   }
  // }

  // const handleDeleteJournal = async (id: string) => {
  //   try {
  //     await api.onDeleteJournal(id);
  //     setJournals(journals.filter((journal: IJournal) => journal.id !== id));
  //
  //     // the lodash way of filtering things out of an arr
  //     // const filterOutJournal = filter(journals, journal => journal.id !== id);
  //     // the normal filter way of filtering things out of an arr
  //
  //     // the splice way of filtering things out of an arr
  //     // const journal = journals.findIndex(({ id }) => id === journalId);
  //     // const filterOutJournal = journals.splice(journal, 1);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // const mappedJournals = map(journals, (journal: IJournal) => (
  //   <div className="main__journal" key={journal?.id}>
  //     <Card journal={journal} onDeleteJournal={handleDeleteJournal} />
  //   </div>
  // ));
  return (
    <Layout>
      <div className="main">
        <div className="main__hub">
          <h4>Dashboard</h4>
          {/*<div>{message}</div>*/}
          {/*<CreateJournal*/}
          {/*  onAddJournal={handleAddJournal}*/}
          {/*  message={message}*/}
          {/*/>*/}
          {/*<div className="main__journalSection">*/}
          {/*  {mappedJournals}*/}
          {/*</div>*/}
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;
