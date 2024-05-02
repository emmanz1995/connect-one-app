import { FC, useState, FormEvent } from 'react';
import Index from '../../atom/input/index';

const CreateJournal: FC<{
  onAddJournal: (journalValues: {
    description: string;
    title: string
  }) => void;
  message: string;
}> = ({ onAddJournal, message }) => {
  // const initialValues = {
  //   title: '',
  //   description: ''
  // };
  // const [ journalValues, setJournalValues ] = useState(initialValues);

  // const handleChange = (evt: FormEvent<HTMLInputElement>) => {
  //   const { name, value } = evt.target as HTMLInputElement;
  //   setJournalValues({ ...journalValues, [name]: value });
  // }

  // const handleCreateJournal = (evt: FormEvent) => {
  //   evt.preventDefault();
  //   onAddJournal(journalValues);
  // }

  return (
    <form className='createJournal'>
      {/*<div className='createJournal__header'>*/}
      {/*  <h4>Create new journal</h4>*/}
      {/*  {message}*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <label htmlFor='title'>Title</label>*/}
      {/*  <Index*/}
      {/*    type='text'*/}
      {/*    value={journalValues.title}*/}
      {/*    name='title'*/}
      {/*    placeholder='Your prayer journal title'*/}
      {/*    onChange={handleChange}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <label htmlFor='description'>Description</label>*/}
      {/*  <Index*/}
      {/*    id='description'*/}
      {/*    type='text'*/}
      {/*    name='description'*/}
      {/*    placeholder='Your prayer journal description'*/}
      {/*    value={journalValues.description}*/}
      {/*    onChange={handleChange}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<button onClick={handleCreateJournal}>Submit</button>*/}
    </form>
  )
}

export default CreateJournal;