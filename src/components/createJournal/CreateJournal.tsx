import { FC, useState, FormEvent } from 'react';

const CreateJournal: FC<{
  onAddJournal: (journalValues: {
    description: string;
    title: string
  }) => void
}> = ({ onAddJournal }) => {
  const initialValues = {
    title: '',
    description: ''
  };
  const [ journalValues, setJournalValues ] = useState(initialValues);

  const handleChange = (evt: FormEvent<HTMLInputElement>) => {
    const { name, value } = evt.target as HTMLInputElement;
    setJournalValues({ ...journalValues, [name]: value });
  }

  const handleCreateJournal = (evt: FormEvent) => {
    evt.preventDefault();
    onAddJournal(journalValues);
  }

  return (
    <form className='createJournal'>
      <div className='createJournal__header'>
        <h4>Create new journal</h4>
      </div>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          className='createJournal__input'
          id='title'
          type='text'
          name='title'
          placeholder='Your prayer journal title'
          value={journalValues.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input
          className='createJournal__input'
          id='description'
          type='text'
          name='description'
          placeholder='Your prayer journal description'
          value={journalValues.description}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleCreateJournal}>Submit</button>
    </form>
  )
}

export default CreateJournal;