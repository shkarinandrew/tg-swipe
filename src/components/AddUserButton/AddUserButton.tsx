import { FC } from 'react';
import { AddUserIcon, bgRedIconUrl } from '../../assets/icons';
import Button from '../Button';

const AddUserButton: FC = () => {
  return (
    <Button
      style={{
        background: `url(${bgRedIconUrl}) center center / cover no-repeat`,
      }}
      className='shadow-none'
    >
      <AddUserIcon />
    </Button>
  );
};

export default AddUserButton;
