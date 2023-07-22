import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
// import './dashboard.scss';
import * as api from '../../api/journal';
import { map } from 'lodash';
import Card from '../../components/Card/Card';
import CreateJournal from '../../components/createJournal/CreateJournal';

interface IJournal {
  title: string;
  description: string;
  completedAt: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

function Dashboard() {
  const [ journals, setJournals ] = useState<IJournal[]>([]);
  // const [ message, setMessage ] = useState<string>('');

  useEffect(() => {
    let isMounted = true

    async function fetchJournals() {
      try {
        const journalEntries: IJournal[] = await api.getJournal();
        if(isMounted) setJournals(journalEntries);
      } catch(err: any) {
        console.log(err)
      }
    }
    fetchJournals();

    return () => {
      isMounted = false;
    }
  }, []);

  const handleAddJournal = async ({ title, description }) => {
    try {
      const newJournal = await api.onCreateJournal({
        title,
        description
      })
      setJournals([ ...journals, newJournal ]);

      console.log('New Journal Created:', newJournal);
    } catch(err: unknown) {
      console.log(err)
    }
  }

  const mappedJournals = map(journals, (journal: IJournal) => (
    <div className="main__journal" key={journal?.id}>
      <Card journal={journal} />
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main__menu">
          <Sidebar />
        </div>
        <div className="main__hub">
          <h4>Dashboard</h4>
          <CreateJournal
            onAddJournal={handleAddJournal}
          />
          <div className="main__journalSection">
            {mappedJournals}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
