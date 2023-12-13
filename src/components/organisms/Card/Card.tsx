import { FC } from 'react';
import './styles.scss';
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

type IJournal = {
  title: string;
  description: string;
  completedAt: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

type MyComponentProps = {
  journal: IJournal;
  onDeleteJournal: any;
}

const Card: FC<MyComponentProps> = (props) => (
  <div className='card'>
    <div className="card__header">
      <h4 className="card__title">{props.journal?.title}</h4>
      <div>
        <Link to={`/journal/${props.journal.id}`}><FaEye /></Link>{' '}
        <FaTrash type='submit' onClick={() => props.onDeleteJournal(props.journal.id)} />{' '}
        <FaEdit />
      </div>
    </div>
    <p className='card__desc'>{props.journal?.description}</p>
    <div className='card__footer'>
      {props.journal.completedAt ? <FaThumbsUp /> : <FaThumbsDown />}
    </div>
  </div>
)

export default Card;