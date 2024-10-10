import { FC } from 'react';
import AccessButton from '../components/AccessButton';
import AddUserButton from '../components/AddUserButton';
import LoockingUserCard from '../components/LoockingUserCard';

const HomePage: FC = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-1.5 mt-2'>
        <AccessButton />
        <AddUserButton />
      </div>
      <LoockingUserCard />
    </>
  );
};

export default HomePage;
