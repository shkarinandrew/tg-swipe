import { FC } from 'react';
import { bgBlueIconUrl } from '../../assets/icons';
import Button from '../Button';

const AccessButton: FC = () => {
  return (
    <Button
      style={{
        background: `url(${bgBlueIconUrl}) center center / cover no-repeat`,
      }}
      className='shadow-none col-span-2'
    >
      Get full <span className='font-normal'>access</span>
    </Button>
  );
};

export default AccessButton;
