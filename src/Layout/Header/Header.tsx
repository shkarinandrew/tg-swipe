import { FC } from 'react';
import { DollarIcon, LogoIcon, SwipeIcon } from '../../assets/icons';

const Header: FC = () => {
  return (
    <header className='flex items-center justify-between'>
      <LogoIcon />

      <div className='flex items-center gap-2 font-semibold text-lg'>
        <div className='px-4 py-2.5 flex items-center gap-2.5'>
          <DollarIcon />
          <div className='text-[#6B6B6B]'>0</div>
        </div>
        <div className='px-4 py-2.5 flex items-center gap-2.5'>
          <SwipeIcon />
          <div className='text-[#6B6B6B]'>0</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
