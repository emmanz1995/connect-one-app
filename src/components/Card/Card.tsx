import { FC } from 'react';
// import './styles.scss';
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

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
}

const Card: FC<MyComponentProps> = ({ journal }) => (
  <div className='card'>
    <div className="card__header">
      <h4 className="card__title">{journal?.title}</h4>
      <div>
        <FaTrash />{' '}
        <FaEdit />
      </div>
    </div>
    <p className='card__desc'>{journal?.description}</p>
    <div className='card__footer'>
      {journal.completedAt ? <FaThumbsUp /> : <FaThumbsDown />}
    </div>
  </div>
)

export default Card;